import { useState } from 'react';
import './App.css';

import { HelloRequest } from "./helloworld/helloworld_pb";
import { GreeterClient } from "./helloworld/HelloworldServiceClientPb";

type State = {
  inputText: string;
  message: string;
}

function App() {
  const initialState = {
    inputText: "World",
    message: ""
  };
  const [state, setState] = useState<State>(initialState);

  const handleClick = () => {
    const request = new HelloRequest();
    request.setName(state.inputText);
    const client = new GreeterClient("http://localhost:8080", {}, {});
    client.sayHello(request, {}, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      setState({ inputText: '', message: ret.getMessage() });
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ inputText: e.target.value, message: state.message})
  }

  return (
    <div className="App">
        <input
          type="text"
          value={state.inputText}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Send</button>
        <p>{state.message}</p>
      </div>
  );
}

export default App;
