import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Login from "./Views/Guest/Login";
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
      </Switch>
    );
  }
}

export default Routes;
