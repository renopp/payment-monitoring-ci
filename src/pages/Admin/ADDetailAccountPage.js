import React from "react";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Footer from "../../components/Footer";
import DetailAccountUpdate from "../../components/Admin/DetailAccount";

const ADDetailAccountPage = () => {
  return (
    <div className="detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3>Detail Account</h3>
          <DetailAccountUpdate />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ADDetailAccountPage;