import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.svg";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

import "./Auth.scss";
import "../../App.scss";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("xmingfu@gmail.com");
  const [password, setPassword] = useState("secret");

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }, history));
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="Login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>

            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="input-field mb-2">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  required="required"
                  placeholder="Password"
                />
              </div>

              <button>Login</button>
            </form>

            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
