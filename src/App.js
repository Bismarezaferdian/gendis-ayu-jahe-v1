import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import SignIn from "./pages/Signin";
import SignUp from "./components/SignupMaterialUi/index";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signIn" component={SignIn} exact />
          <Route path="/signUp" component={SignUp} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
