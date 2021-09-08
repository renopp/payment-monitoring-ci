import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { GSPaymentRequestPage } from "./pages/GeneralSupport";
import {
  UKBerandaPage,
  UKDetailPaymentPage,
  UKLoginPage,
  UKPaymentRequestPage,
} from "./pages/UnitKerja";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

const LoginContainer = () => <Route path="/" component={LoginPage} />;

const DefaultContainer = () => (
  <>
    <Navbar />
    <Route path="/" exact component={UKLoginPage} />
    <Route path="/unitkerja-beranda" component={UKBerandaPage} />
    <Route path="/unitkerja-paymentrequest" component={UKPaymentRequestPage} />
    <Route path="/unitkerja-detailpayment" component={UKDetailPaymentPage} />
    <Route path="/gs-paymentrequest" component={GSPaymentRequestPage} />
  </>
);

export default App;
