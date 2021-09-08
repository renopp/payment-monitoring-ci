import React from "react";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Footer from "../../components/Footer";
import CreateRoleForm from "../../components/Admin/CreateRoleForm";

const ADCreateRolePage = () => {
  return (
    <div className="form-detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3>Create Account</h3>
          <CreateRoleForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ADCreateRolePage;