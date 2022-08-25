import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss?v=1.3.0";
// import "./assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.js";
import AboutUsPage from "views/examples/AboutUsPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/aboutus" render={(props) => <AboutUsPage {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
