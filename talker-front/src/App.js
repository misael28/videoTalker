import "./App.css";
import { useEffect } from "react";
import { connectWithWebSocket } from "./utils/wssConnection/wwsConnection";

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);
  return <div className="App"></div>;
}

export default App;
