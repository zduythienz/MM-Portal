import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./contents/css/myStyle.css";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter>
    );
  }
}

export default App;
