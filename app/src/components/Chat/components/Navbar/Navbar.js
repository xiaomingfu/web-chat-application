import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../../../store/actions/auth";

import "./Navbar.scss";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div id="profile-menu" onClick={() => setShowProfile(!showProfile)}>
        <img width="40px" height="40px" src={user.avatar} alt="Avatar" />
        <p>
          {user.firstName} {user.lastName}
        </p>
        <FontAwesomeIcon icon="caret-down" />

        {showProfile && (
          <div id="profile-options">
            <p>Update profile</p>
            <p
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
