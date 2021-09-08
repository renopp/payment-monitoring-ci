import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import CreateRoleForm from "../../components/Admin/UpdateRoleForm";
import Footer from "../../components/Footer";

const ADUpdateRolePage = () => {
  return (
    <div className="detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <h3>Update Account</h3>
          <CreateRoleForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ADUpdateRolePage;