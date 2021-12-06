import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Chat from "./components/Chat/Chat";
import ProtectedRoute from "./components/Router/ProtectedRoute";

import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faCaretDown,
  faEllipsisV,
  faSpinner,
  faTimes,
  faTrash,
  faUpload,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCaretDown,
  faEllipsisV,
  faSmile,
  faImage,
  faSpinner,
  faUserPlus,
  faTrash,
  faUpload,
  faTimes,
  faBell
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
