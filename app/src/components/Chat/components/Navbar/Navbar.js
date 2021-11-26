import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout, updateProfile } from "../../../../store/actions/auth";
import Modal from "../../../Modal/Modal.js";

import "./Navbar.scss";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState(user.gender);

  const submitForm = (e) => {
    e.preventDefault();

    const form = { firstName, lastName, email, avatar, gender };
    if (password.length > 0) {
      form.password = password;
    }

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    dispatch(updateProfile(formData)).then(() => setShowModal(false));
  };

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
            <p onClick={() => setShowModal(true)}>Update profile</p>
            <p
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </p>
          </div>
        )}

        {showModal && (
          <Modal click={() => setShowModal(false)}>
            <Fragment key="header">
              <h2>Update profile</h2>
            </Fragment>
            <Fragment key="body">
              <form onSubmit={submitForm}>
                <div className="input-field mb-1">
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required="required"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="input-field mb-1">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required="required"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="input-field mb-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required="required"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="input-field mb-1">
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    required="required"
                    value={gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="input-field mb-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required="required"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input-field mb-2">
                  <input
                    onChange={(e) => setAvatar(e.target.files[0])}
                    type="file"
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key="footer">
              <button className="btn-success" onClick={submitForm}>
                Update
              </button>
            </Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
