import React from "react";
import Footerr from "../components/Footer";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import ListPaymentRequest from "../components/ListPaymentRequest";

const Beranda = () => {
  return (
    // <div className="beranda">
    //   <ListPaymentRequest />
    // </div>
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <ListPaymentRequest />
        </Content>
        <Footerr />
      </Layout>
    </>
  );
};

export default Beranda;
