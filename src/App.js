import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import CreatePayment from "./pages/Create_Payment";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/beranda" exact component={Beranda} />
          <Route path="/create-payment" component={CreatePayment} />
          <Route path="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
