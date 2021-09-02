import React from "react";
import img from "../assets/image_logo2.png";
import "../components/LoginForm.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import LoginForm from "./../components/LoginForm";

// const {} = Layout;

const LoginPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="App-header">
        <div className="container">
          <img src={img} className="BRI-logo" alt="logo" />
          <LoginForm />
        </div>
      </Layout>
    </Layout>
  );
};

export default LoginPage;
