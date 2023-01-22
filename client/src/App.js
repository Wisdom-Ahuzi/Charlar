import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import "./Styles/App.scss";
import Dashboard from "./Views/Dashboard";
import { Login } from "./Views/Login";

function App() {
  const [userId, setUserId] = useLocalStorage("id");
  return userId ? (
    <Dashboard userId={userId} />
  ) : (
    <Login setUserId={setUserId} />
  );
}

export default App;
