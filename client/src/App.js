import React from "react";
import { ContactsProvider } from "./Contexts/ContactsProvider";
import { MessagesProvider } from "./Contexts/MessagesProvider";
import { SocketProvider } from "./Contexts/SocketProvider";
import useLocalStorage from "./Hooks/useLocalStorage";
import "./Styles/App.scss";
import Dashboard from "./Views/Dashboard";
import { Login } from "./Views/Login";

function App() {
  const [userId, setUserId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider userId={userId}>
      <ContactsProvider>
        <MessagesProvider userId={userId}>
          <Dashboard userId={userId} />
        </MessagesProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return userId ? dashboard : <Login setUserId={setUserId} />;
}

export default App;
