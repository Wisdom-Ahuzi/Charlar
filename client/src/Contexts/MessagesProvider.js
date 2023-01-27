import React, { useContext, useState, useEffect, useCallback } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";
const MessagesContext = React.createContext();

export const useMessage = () => {
  return useContext(MessagesContext);
};

export const MessagesProvider = ({ children, userId }) => {
  const [messages, setMessages] = useLocalStorage("messages", []);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);
  const { contacts } = useContact();
  const socket = useSocket();

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

    const messagesChat = message.messages.map((chat) => {
      const contact = contacts.find((contact) => {
        return contact.id === chat.sender;
      });

      const name = (contact && contact.name) || chat.sender;
      const fromMe = userId === chat.sender;
      return { ...chat, senderName: name, fromMe };
    });

    const selected = index === selectedMessageIndex;
    return { ...message, messagesChat, receivers, selected };
  });

  const addChatToMessage = useCallback(
    ({ receivers, text, sender }) => {
      setMessages((prevMessages) => {
        let madeChange = false;
        const newMessage = { sender, text };
        const newChats = prevMessages.map((message) => {
          if (arrayEquality(message.receivers, receivers)) {
            madeChange = true;
            return {
              ...message,
              messages: [...message.messages, newMessage],
            };
          }
          return message;
        });
        if (madeChange) {
          return newChats;
        } else {
          return [...prevMessages, { receivers, messages: [newMessage] }];
        }
      });
    },
    [setMessages]
  );

  useEffect(() => {
    if (socket == null) return;
    socket.on("receive-message", addChatToMessage);
    return () => socket.off("receive-message");
  }, [socket, addChatToMessage]);

  const sendChat = (receivers, text) => {
    socket.emit("send-message", { receivers, text });
    addChatToMessage({ receivers, text, sender: userId });
  };

  const value = {
    messages: formattedMessages,
    selectedMessage: formattedMessages[selectedMessageIndex],
    sendChat,
    selectedMessageIndex: setSelectedMessageIndex,
    createMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};

const arrayEquality = (a, b) => {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
};
