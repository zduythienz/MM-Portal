import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Login from "./Views/Guest/Login";
import Register from "./Views/Guest/Register";
import Home from "./Views/User/MainView/Home";

import GuestRoute from "./components/routes/guestRoute";
import UserRoute from "./components/routes/userRoute";
import PlanCalendar from "./Views/User/MainView/Plan/Calendar";

class Routes extends Component {
  render() {
    console.log("call routes");

    return (
      <Switch>
        <UserRoute path="/" exact component={Home} />
        <UserRoute path="/plan-calendar" exact component={PlanCalendar} />

        <UserRoute path="/home" exact component={Home} />

        <GuestRoute path="/login" exact component={Login} />
        <GuestRoute path="/register" exact component={Register} />
      </Switch>
    );
  }
}

export default Routes;
