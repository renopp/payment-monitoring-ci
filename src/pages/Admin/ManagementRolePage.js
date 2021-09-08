import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from 'react';
import FooterPage from '../../components/Footer';
import ListRole from '../../components/ListRole';

function ManagementRolePage() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ marginTop: "50px" }}>
          <ListRole />
        </Content>
        <FooterPage />
      </Layout>
    </>
  )
}

export default ManagementRolePage
