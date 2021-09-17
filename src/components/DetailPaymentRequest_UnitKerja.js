import { Button, Col, Form, Row, Typography } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DetailPaymentRequest.css";
import { useQuery } from "react-query";

const { Text, Title } = Typography;

const DetailPaymentRequest = () => {
  const { isLoading, isError, data } = useQuery("todos", async () => {
    const response = await fetch("http://localhost:5000/paymentRequest");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  console.log("value >>", isLoading, isError, data);

  const history = useHistory();
  const navigateTo = React.useCallback(() => history.push("/unitkerja-beranda"), [history]);
  const Model = {
    diminta_oleh: "Asep Sunandar",
    keperluan: "SPP Juli 2020",
    tanggal_pembayaran: "Sabtu, 11 Juli 2021",
    jumlah_payment: "Rp. 1.000.000",
    terbilang: "Satu Juta Rupiah",
    nama_rek_penerima: "MD. Mubarokul Huda",
    no_rek_penerima: "15000757050",
    request_terkirim: "Jum'at, 8 Juli 2021 (09.00 PM)",
    status_request: "Menunggu konfirmasi General Support",
  };

  const [formState, setFormState] = useState({ Model });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="center">
      <Col span={12}>
        <Title level={3} align="center" style={{ marginTop: 40, marginBottom: 50 }}>
          Detail Payment Request
        </Title>
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Diminta Oleh</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.diminta_oleh}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Keperluan</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.keperluan}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Tanggal Pembayaran</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.tanggal_pembayaran}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Jumlah Payment</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.jumlah_payment}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Terbilang</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.terbilang}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Nama Rek. Penerima</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.nama_rek_penerima}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>No Rekening Penerima</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.no_rek_penerima}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Request Terkirim</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text>{formState.Model.request_terkirim}</Text>
            </Col>
          </Row>

          <Row justify="left" className="row">
            <Col span={10}>
              <Text>Status</Text>
            </Col>
            <Col span={2}>
              <Text>:</Text>
            </Col>
            <Col span={12}>
              <Text id="status-payment"> {formState.Model.status_request}</Text>
            </Col>
          </Row>
          <Row id="button-detail">
            <Col span={3}>
              <Form.Item>
                <Button danger htmlType="submit" onClick={navigateTo}>
                  Kembali
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default DetailPaymentRequest;
