import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/Navbar";
import BerandaPage from "./pages/BerandaPage";
import CreatePaymentPage from "./pages/CreatePaymentPage";
import LoginPage from "./pages/LoginPage";
import DetailPaymentRequest from "./pages/DetailPaymentRequestPage";
import FormPaymentRequest from "./pages/FormPaymentRequestPage";

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
    <Route path="/" exact component={LoginPage} />
    <Route path="/unitkerja-beranda" component={BerandaPage} />
    <Route path="/unitkerja-paymentrequest" component={FormPaymentRequest} />
    <Route path="/unitkerja-detailpayment" component={DetailPaymentRequest} />
    <Route path="/gs-paymentrequest" component={CreatePaymentPage} />
  </>
);

export default App;
