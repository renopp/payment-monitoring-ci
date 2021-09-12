import { Layout, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import CreateRoleForm from "../../components/Admin/UpdateRoleForm";
import Footer from "../../components/Footer";

const { Title } = Typography;

const ADUpdateRolePage = () => {
  return (
    <div className="detailaccount">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <Title level={3}> Update Account </Title>
          <CreateRoleForm />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ADUpdateRolePage;