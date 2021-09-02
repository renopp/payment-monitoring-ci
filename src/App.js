import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import CreatePayment from "./pages/Create_Payment";
import LoginPage from "./pages/LoginPage";
import DetailPaymentRequest from "./pages/DetailPaymentRequest";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/beranda" component={Beranda} />
          <Route path="/create-payment" component={CreatePayment} />
          <Route path="/detail-payment" component={DetailPaymentRequest} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
