import React from "react";
import { useMessage } from "../../Contexts/MessagesProvider";

const Messages = () => {
  const { messages, selectedMessageIndex } = useMessage();

  return (
    <div className="messages-Container">
      {messages.map((message, i) => (
        <span
          className="user-Message"
          key={i}
          onClick={() => selectedMessageIndex(i)}
          id={message.selected ? "true" : "false"}
        >
          {message.receivers.map((r) => r.name).join(", ")}
        </span>
      ))}
    </div>
  );
};

export default Messages;
