import { MessageRequest } from "../helloworld/helloworld_pb";
import { useState, useCallback, SyntheticEvent } from "react";
import { MessangerClient } from "../helloworld/HelloworldServiceClientPb";

export const useMessageForm = (client: MessangerClient) => {
  const [message, setMessage] = useState<string>("");

  // メッセージ入力欄
  const onChange = useCallback(
    (event: SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      setMessage(target.value);
    },
    [setMessage]
  );

  // メッセージ投稿
  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      const req = new MessageRequest();
      req.setMessage(message);
      client.createMessage(req, null, res => console.log(res));
      setMessage("");
    },
    [client, message]
  );

  return {
    message,
    onChange,
    onSubmit
  };
};
