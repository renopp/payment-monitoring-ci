import React from "react";
import AccountigDetailPaymentForm from "./AccountingDetailPaymentForm";
import { Content } from "antd/lib/layout/layout";
import { Layout, Typography } from "antd";
import Footer from "../../components/Footer";

const { Title } = Typography;

const AccountigDetailPaymentPage = () => {
  return (
    <div className="detailpayment">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <Title level={3}>Payment Request</Title>
          <AccountigDetailPaymentForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default AccountigDetailPaymentPage;
