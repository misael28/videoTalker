import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
