import React from "react";
import { useContact } from "../../Contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContact();
  return (
    <div className="contacts-Container">
      {contacts.map((contact) => (
        <span className="user-Contact-Container" key={contact.id}>
          <p>{contact.name}</p>
        </span>
      ))}
    </div>
  );
};

export default Contacts;
