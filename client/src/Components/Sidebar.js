import React, { useState } from "react";
import Messages from "../Components/SidebarComponents/Messages";
import MessageModal from "../Components/SidebarComponents/MessageModal";
import Contacts from "../Components/SidebarComponents/Contacts";
import ContactModal from "../Components/SidebarComponents/ContactModal";

const Sidebar = ({ userId }) => {
  const [activeTab, setActiveTab] = useState("messages");
  const [modalState, setModalState] = useState(null);

  const handleMessageTab = () => {
    setActiveTab("messages");
  };

  const handleContactsTab = () => {
    setActiveTab("contacts");
  };

  const handleCloseModal = () => {
    setModalState("");
  };

  return (
    <div className="sidebar-Container">
      <section className="tab-Nav-Container">
        <span
          id="messages"
          onClick={handleMessageTab}
          className={activeTab === "messages" ? "activeTab" : ""}
        >
          <p>Messages</p>
        </span>
        <span
          id="contacts"
          onClick={handleContactsTab}
          className={activeTab === "contacts" ? "activeTab" : ""}
        >
          <p>Contacts</p>
        </span>
      </section>
      <section className="tab-Content-Container">
        {activeTab === "messages" ? <Messages /> : <Contacts />}
      </section>
      <section className="user-Id-Container">
        <span className="user-Id">
          <p>
            Your Id : <span className="idid">{userId}</span>
          </p>
        </span>
        <span
          className="new-Container"
          onClick={() => setModalState("openModal")}
        >
          <p>New {activeTab === "contacts" ? "Contact" : "Message"}</p>
        </span>
      </section>
      <section className="modal-Container" id={modalState}>
        {activeTab === "contacts" ? (
          <ContactModal
            setModalState={setModalState}
            handleCloseModal={handleCloseModal}
          />
        ) : (
          <MessageModal
            setModalState={setModalState}
            handleCloseModal={handleCloseModal}
          />
        )}
      </section>
    </div>
  );
};

export default Sidebar;
