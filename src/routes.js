import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Login from "./Views/Guest/Login";
import Register from "./Views/Guest/Register";
import Home from "./Views/User/Home";

import GuestRoute from "./components/routes/guestRoute";
import UserRoute from "./components/routes/userRoute";

class Routes extends Component {
  render() {
    console.log("call routes");

    return (
      <Switch>
        <UserRoute path="/" exact component={Home} />

        <UserRoute path="/home" exact component={Home} />

        <GuestRoute path="/login" exact component={Login} />
        <GuestRoute path="/register" exact component={Register} />
      </Switch>
    );
  }
}

export default Routes;
