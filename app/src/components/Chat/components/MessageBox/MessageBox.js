import React from "react";
import Message from "../Message/Message";
import { useSelector } from "react-redux";

const MessageBox = ({ chat }) => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div id="msg-box">
      {chat.Messages.map((message, index) => {
        return (
          <Message
            key={message.id}
            chat={chat}
            message={message}
            index={index}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default MessageBox;
