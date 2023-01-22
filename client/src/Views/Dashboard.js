import React from "react";
import Sidebar from "../Components/Sidebar";
import Chats from "../Components/Chats";
import "../Styles/Dashboard.scss";

const Dashboard = ({ userId }) => {
  return (
    <main className="dashboard-Container">
      <Sidebar userId={userId} />
      <Chats />
    </main>
  );
};

export default Dashboard;
