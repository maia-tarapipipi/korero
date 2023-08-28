import React from "react";
import io from "socket.io-client";

const socket = io();

export default function Messages() {
  const [messages, setMessages] = React.useState([]);
  socket.on("message", (msg) => {
    setMessages((messages) => [...messages, msg]);
  });

  return (
    <div>
      heres where the messages will go!
      {messages.map((msg, id) => (
        <div key={id}>
          <p>msg.name</p>
          <p>msg.message</p>
          <p>msg.date</p>
        </div>
      ))}
    </div>
  );
}
