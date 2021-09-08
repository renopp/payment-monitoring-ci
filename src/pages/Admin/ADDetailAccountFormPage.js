import React from "react";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Footer from "../../components/Footer";
import DetailAccountForm from "../../components/Admin/DetailAccountForm";

const ADDetailAccountFormPage = () => {
  return (
    <div className="form-detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3>Detail Account</h3>
          <DetailAccountForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ADDetailAccountFormPage;