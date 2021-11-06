import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { connectWithWebSocket } from "./utils/wssConnection/wwsConnection";
import LoginPage from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
