import React from "react";
import Sidebar from "../Components/Sidebar";
import Chats from "../Components/Chats";
import "../Styles/Dashboard.scss";
import { useMessage } from "../Contexts/MessagesProvider";

const Dashboard = ({ userId }) => {
  const { selectedMessage } = useMessage();
  return (
    <main className="dashboard-Container">
      <Sidebar userId={userId} />
      {selectedMessage && <Chats />}
    </main>
  );
};

export default Dashboard;
