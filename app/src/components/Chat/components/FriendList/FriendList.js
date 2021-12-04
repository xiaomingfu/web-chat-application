import "./FriendList.scss";

import React from "react";
import { useSelector } from "react-redux";
import chatReducer from "../../../../store/reducers/chat";
import Friend from "../Friend/Friend";

const FriendList = () => {
  const chats = useSelector((state) => state.chatReducer.chats);

  return (
    <div id="friends">
      <div id="title">
        <h3 className="m-0">Friends</h3>
        <button>ADD</button>
      </div>
      <hr />

      <div id="friends-box">
        {chats.length > 0 ? (
          chats.map((chat) => {
            return <Friend chat={chat} key={chat.id} />;
          })
        ) : (
          <p>No friends added</p>
        )}
      </div>
    </div>
  );
};

export default FriendList;
