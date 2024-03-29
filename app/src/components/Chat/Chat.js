import "./Chat.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FriendList from "./components/FriendList/FriendList";
import Messenger from "./components/Messenger/Messenger";
import Navbar from "./components/Navbar/Navbar";
import { fetchChats } from "../../store/actions/chat";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(fetchChats())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};

export default Chat;
