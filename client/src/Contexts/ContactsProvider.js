import React, { useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const ContactContext = React.createContext();

export const useContact = () => {
  return useContext(ContactContext);
};

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };
  return (
    <ContactContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactContext.Provider>
  );
};
