import React from "react";
import CreatePaymentForm from "../../components/CreatePaymentForm";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Footer from "../../components/Footer";

const GSPaymentRequestPage = () => {
  return (
    <div className="createpayment">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3>Form Payment Request</h3>
          <CreatePaymentForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default GSPaymentRequestPage;
