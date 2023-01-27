import React, { useRef, useState } from "react";
import { useContact } from "../../Contexts/ContactsProvider";
import { useMessage } from "../../Contexts/MessagesProvider";

const MessageModal = ({ handleCloseModal, setModalState }) => {
  const { contacts } = useContact();
  const { createMessage } = useMessage();
  const [selectedContactId, setSelectedContactId] = useState([]);
  const messageFormRef = useRef();
  const [searchText, setSearchText] = useState("");

  const handleCreateMessage = (e) => {
    e.preventDefault();
    createMessage(selectedContactId);
    setModalState("");
    messageFormRef.current.reset();
    window.location.reload(false);
  };
  const handleChangeCheckbox = (contactId) => {
    setSelectedContactId((prevSelectedContactId) => {
      if (prevSelectedContactId.includes(contactId)) {
        return prevSelectedContactId.filter((contact) => {
          return contact !== contactId;
        });
      } else {
        return [...prevSelectedContactId, contactId];
      }
    });
  };
  return (
    <div className="messagemodal-Container">
      <form
        className="inner-Contactmodal-Container"
        onSubmit={handleCreateMessage}
        ref={messageFormRef}
      >
        <header>
          <h3>Create Message</h3>
          <span onClick={handleCloseModal}>X</span>
        </header>
        <section className="search-Container">
          <input
            type="text"
            placeholder="Search Contacts"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </section>
        <section className="all-Contactsmodal-Container">
          {contacts
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .filter((c) => {
              return searchText === "" ? c : c.name.includes(searchText);
            })
            .map((contact) => (
              <label key={contact.id}>
                <input
                  type="checkbox"
                  value={selectedContactId.includes(contact.id)}
                  onChange={() => handleChangeCheckbox(contact.id)}
                />
                {contact.name}
              </label>
            ))}
        </section>

        <section className="create-Contact-Container">
          <button onClick={handleCreateMessage}>Create Message</button>
        </section>
      </form>
    </div>
  );
};

export default MessageModal;
