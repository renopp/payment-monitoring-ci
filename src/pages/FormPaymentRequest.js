import React from "react";
import "antd/dist/antd.css";
import "../components/FormPaymentRequest.css";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import FormPayment from "../components/FormPayment";

function FormPaymentRequest() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3
            style={{
              marginRight: "250px",
            }}
          >
            Silahkan Isi Form Payment Request
          </h3>
          <FormPayment />
        </Content>
        <Footer
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#09539C",
          }}
        >
          Copyright © 2021 Rakamin Academy x FE B All Rights Reserved
        </Footer>
      </Layout>
    </>
  );
}

export default FormPaymentRequest;
