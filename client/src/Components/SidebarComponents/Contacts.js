import React, { useState } from "react";
import { useContact } from "../../Contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContact();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="contacts-Container">
      <section className="search-Container">
        <input
          type="text"
          placeholder="Search Contacts"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </section>
      <section className="c-Container">
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
            <span className="user-Contact-Container" key={contact.id}>
              <p>{contact.name}</p>
            </span>
          ))}
      </section>
    </div>
  );
};

export default Contacts;
