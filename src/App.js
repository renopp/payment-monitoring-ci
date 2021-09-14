import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import { AuthorizedContextProvider } from "./AuthorizedContext";

function App() {
  return (
    <AuthorizedContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/officer-login" component={GSLoginPage} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </AuthorizedContextProvider>
  );
}

const LoginContainer = () => <Route path="/" component={UKLoginPage} />;

const DefaultContainer = () => (
  <>
    <Navbar />
    <Route path="/" exact component={UKLoginPage} />
    <AuthorizedRoute path="/unitkerja-beranda" exact component={UKBerandaPage}></AuthorizedRoute>
    <AuthorizedRoute path="/unitkerja-paymentrequest" exact component={UKPaymentRequestPage}></AuthorizedRoute>
    <AuthorizedRoute path="/unitkerja-detailpayment" exact component={UKDetailPaymentPage}></AuthorizedRoute>
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
