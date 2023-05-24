import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { useState, useEffect } from "react";
import { MessangerClient } from "../helloworld/HelloworldServiceClientPb";

export const useMessages = (client: MessangerClient) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const stream$ = client.getMessages(new Empty());
    stream$.on("data", m => {
      setMessages(state => [...state, m.getMessage()]);
    });
  }, [client]);

  return {
    messages
  };
};
