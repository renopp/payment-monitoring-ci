import React, { useState } from "react";
import { Table, Tag, Space, Button, Row } from "antd";
import "./ListPaymentRequest.css";
import { useHistory } from "react-router-dom";

const ListPaymentRequest = () => {
  const history = useHistory();
  const navigateTo = () => history.push("/detail-payment");
  // table
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Tanggal Request",
      dataIndex: "tgl_request",
      key: "tgl_request",
    },
    {
      title: "Tanggal Pembayaran",
      dataIndex: "tgl_pembayaran",
      key: "tgl_pembayaran",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (action) => (
        <>
          {action.map((act) => {
            let color;
            if (act === "rejected by accounting") {
              color = "volcano";
            } else if (act === "disetujui") {
              color = "green";
            } else if (act === "menunggu konfirmasi") {
              color = "yellow";
            }
            return (
              <Tag color={color} key={act}>
                {act.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      // title: 'Button',
      key: "buttonDetail",
      render: (text) => (
        <Space size="middle">
          <Button type="primary" onClick={navigateTo}>
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      no: "1.",
      tgl_request: "08 Juli 2021 10.00 WIB",
      tgl_pembayaran: "11 Juli 2021",
      action: ["menunggu konfirmasi"],
    },
    {
      key: "2",
      no: "2.",
      tgl_request: "09 Juli 2021 11.00 WIB",
      tgl_pembayaran: "12 Juli 2021",
      action: ["disetujui"],
    },
    {
      key: "3",
      no: "3.",
      tgl_request: "10 Juli 2021 12.00 WIB",
      tgl_pembayaran: "14 Juli 2021",
      action: ["rejected by accounting"],
    },
    {
      key: "4",
      no: "4.",
      tgl_request: "11 Juli 2021 13.00 WIB",
      tgl_pembayaran: "18 Juli 2021",
      action: ["disetujui"],
    },
  ];

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
      <h1>List Payment Request - KC Bank XXX</h1>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns}
        dataSource={data}
      />
    </Row>
  );
};

export default ListPaymentRequest;
