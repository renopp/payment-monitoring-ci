import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { 
  AccountigDetailPaymentPage,
  AccountingBerandaPage,
} from "./pages/Accounting";
import {
  ADCreateRolePage,
  ADManagementRolePage,
  ADUpdateRolePage,
} from "./pages/Admin";
import { GSLoginPage, GSPaymentRequestPage } from "./pages/GeneralSupport";
import {
  UKBerandaPage,
  UKDetailPaymentPage,
  UKLoginPage,
  UKPaymentRequestPage,
} from "./pages/UnitKerja";
import AuthorizedRoute from "./AuthorizedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/officer-login" component={GSLoginPage} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

const LoginContainer = () => <Route path="/" component={UKLoginPage} />;

const DefaultContainer = () => (
  <>
    <Navbar />
    <Route path="/" exact component={UKLoginPage} />
    <Route path="/unitkerja-beranda" component={UKBerandaPage} />
    <Route path="/unitkerja-paymentrequest" component={UKPaymentRequestPage} />
    <Route path="/unitkerja-detailpayment" component={UKDetailPaymentPage} />
    <Route path="/gs-paymentrequest" component={GSPaymentRequestPage} />
    <Route path="/accounting-request" component={AccountigDetailPaymentPage} />
    <Route path="/accounting-beranda" component={AccountingBerandaPage} />
    <Route path="/role-account-update" component={ADUpdateRolePage} />
    <Route path="/role-account-add" component={ADCreateRolePage} />
    <Route path="/admin-beranda" component={ADManagementRolePage} />
    <Footer />
  </>
);

export default App;
