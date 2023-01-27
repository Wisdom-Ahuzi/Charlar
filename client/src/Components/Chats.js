import React, { useCallback, useState } from "react";
import "../Styles/Dashboard.scss";
import { useMessage } from "../Contexts/MessagesProvider";

const Chats = () => {
  const [text, setText] = useState();
  const setLastRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendChat, selectedMessage } = useMessage();

  const handleSendChat = (e) => {
    e.preventDefault();
    sendChat(
      selectedMessage.receivers.map((r) => r.id),
      text
    );
    setText(" ");
  };

  return (
    <main className="chats-Container">
      <section className="chats-Inner-Container">
        <div className="chats-Holder">
          {selectedMessage.messagesChat.map((message, index) => {
            const lastText = selectedMessage.messagesChat.length - 1 === index;
            return (
              <div
                key={index}
                ref={lastText ? setLastRef : null}
                className={`individual-Chat-Container ${
                  message.fromMe ? "my-Chat" : ""
                }`}
              >
                {" "}
                <div
                  className={`${message.fromMe ? "chat-Text" : "sender-Text"}`}
                >
                  {message.text}
                </div>{" "}
                <small
                  className={`fromMe ${message.fromMe ? "text-Right" : ""} `}
                >
                  {message.fromMe ? "you" : message.senderName}
                </small>{" "}
              </div>
            );
          })}
        </div>
      </section>
      <section className="create-Chat">
        <form onSubmit={handleSendChat}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <button onClick={handleSendChat}>Send</button>
        </form>
      </section>
    </main>
  );
};

export default Chats;
