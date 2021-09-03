import React, { useState } from "react";
import "./CreatePaymentForm";

import { Form, Input, Button, Col, Row, DatePicker, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const CreatePaymentForm = () => {
  const history = useHistory();
  const navigateTo = () => history.push("/unitkerja-beranda");
  const Model = {
    nm_unit: "",
    diminta_oleh: "",
    keperluan: "",
    tanggal_pembayaran_aktual: "",
    jumlah_payment: "",
    terbilang: "",
    nama_rek_penerima: "",
    no_rek_penerima: "",
    request_terkirim: "",
    status: "",
  };

  const [formState, setFormState] = useState({
    Model,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify="center">
      <Col span={14}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Nama Unit"
            name="nm_unit"
            rules={[
              { required: true, message: "Nama unit tidak boleh kosong!" },
            ]}
          >
            <Input
              placeholder="Nama Unit"
              value={formState.Model.nm_unit}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: { ...formState.Model, nm_unit: e.target.value },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Diminta Oleh"
            name="diminta_oleh"
            rules={[
              { required: true, message: "Diminta Oleh tidak boleh kosong!" },
            ]}
          >
            <Input
              value={formState.Model.diminta_oleh}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: { ...formState.Model, diminta_oleh: e.target.value },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Keperluan"
            name="keperluan"
            rules={[
              { required: true, message: "Keperluan tidak boleh kosong!" },
            ]}
          >
            <Input
              value={formState.Model.keperluan}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: { ...formState.Model, keperluan: e.target.value },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Tanggal Pembayaran"
            name="tanggal_pembayaran_aktual"
            rules={[
              {
                required: true,
                message: "Tanggal Pembayaran tidak boleh kosong!",
              },
            ]}
          >
            <DatePicker
              onChange={onChangeDate}
              style={{ width: 300 }}
              placeholder="Pilih Tanggal Pembayaran"
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Jumlah Payment"
            name="jumlah_payment"
            rules={[
              { required: true, message: "Jumlah Payment tidak boleh kosong!" },
            ]}
          >
            <Input
              style={{ marginLeft: "-0px" }}
              addonBefore="Rp. "
              value={formState.Model.jumlah_payment}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: { ...formState.Model, jumlah_payment: e.target.value },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Terbilang"
            name="terbilang"
            rules={[
              { required: true, message: "Terbilang tidak boleh kosong!" },
            ]}
          >
            <TextArea
              value={formState.Model.terbilang}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: { ...formState.Model, terbilang: e.target.value },
                });
              }}
              placeholder="Terbilang"
              autoSize={{ minRows: 2, maxRows: 3 }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Nama Rek. Penerima"
            name="nama_rek_penerima"
            rules={[
              {
                required: true,
                message: "Nama Rek. Penerima tidak boleh kosong!",
              },
            ]}
          >
            <Input
              value={formState.Model.nama_rek_penerima}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: {
                    ...formState.Model,
                    nama_rek_penerima: e.target.value,
                  },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="No Rekening Penerima"
            name="no_rek_penerima"
            rules={[
              {
                required: true,
                message: "No Rekening Penerima tidak boleh kosong!",
              },
            ]}
          >
            <Input
              value={formState.Model.no_rek_penerima}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: {
                    ...formState.Model,
                    no_rek_penerima: e.target.value,
                  },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Request Terkirim"
            name="request_terkirim"
            rules={[
              {
                required: true,
                message: "Request Terkirim tidak boleh kosong!",
              },
            ]}
          >
            <Input
              value={formState.Model.request_terkirim}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  Model: {
                    ...formState.Model,
                    request_terkirim: e.target.value,
                  },
                });
              }}
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            labelCol={{ span: 8 }}
            label="Status"
            name="status"
            rules={[{ required: true, message: "Status tidak boleh kosong!" }]}
          >
            <Select defaultValue="">
              <Option value="0">Teruskan Ke Accounting</Option>
              <Option value="1">Reject</Option>
            </Select>
          </Form.Item>
          <Row>
            <Col span={4}>
              <Form.Item>
                <Button danger htmlType="submit" onClick={() => {}}>
                  Kembali
                </Button>
              </Form.Item>
            </Col>
            <Col span={4} offset={16}>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={navigateTo}>
                  Update
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default CreatePaymentForm;
