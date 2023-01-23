import React, { useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";
const MessagesContext = React.createContext();

export const useMessage = () => {
  return useContext(MessagesContext);
};

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useLocalStorage("messages", []);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);
  const { contacts } = useContact();
  const createMessage = (receivers) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { receivers, messages: [] }];
    });
  };

  const formattedMessages = messages.map((message, index) => {
    const receivers = message.receivers.map((receiver) => {
      const contact = contacts.find((contact) => {
        return receiver === contact.id;
      });

      const name = (contact && contact.name) || receiver;
      return { id: receiver, name };
    });

    const selected = index === selectedMessageIndex;
    return { ...messages, receivers, selected };
  });

  const value = {
    messages: formattedMessages,
    selectedMessage: formattedMessages[selectedMessageIndex],
    selectedMessageIndex: setSelectedMessageIndex,
    createMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
