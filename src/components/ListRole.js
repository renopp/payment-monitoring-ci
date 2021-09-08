import { Button, Row, Space, Table, Tag } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "./ListPaymentRequest.css";

const data = [
  {
    key: "1",
    no: "1.",
    name: "Dinda Nurlita",
    role: "Accounting",
    username: "10001",
  },
  {
    key: "2",
    no: "2.",
    name: "Sarifuddin",
    role: "Generela Support",
    username: "10002",
  },
];

const ListRole = () => {
  // const history = useHistory();
  // const navigateTo = React.useCallback(() => history.push("/unitkerja-detailpayment"), [history]);
  // // table
  const columns = React.useMemo(
    () => [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
      },
      {
        title: "Username",
        key: "username",
        dataIndex: "username",
        // render: (action) => (
        //   <>
        //     {action.map((act) => {
        //       let color;
        //       if (act === "rejected by accounting") {
        //         color = "volcano";
        //       } else if (act === "disetujui") {
        //         color = "green";
        //       } else if (act === "menunggu konfirmasi") {
        //         color = "yellow";
        //       }
        //       return (
        //         <Tag color={color} key={act}>
        //           {act.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </>
        // ),
      },
      {
        // title: 'Button',
        key: "buttonDetail",
        render: (text) => (
          <Space size="middle">
            <Button type="primary">
              Detail
            </Button>
          </Space>
        ),
      },
    ],
    // [navigateTo]
    []
  );

  return (
    <Row
      justify="center"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Role & Account</h1>
      <Table rowClassName={(_, index) => (index % 2 === 0 ? "table-row-light" : "table-row-dark")} columns={columns} dataSource={data} />
    </Row>
  );
};

export default ListRole;
