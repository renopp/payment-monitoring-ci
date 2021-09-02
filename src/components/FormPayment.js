import React from "react";
import { Form, Input, InputNumber, Button, Row, Col, DatePicker } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
};
/* eslint-enable no-template-curly-in-string */

const FormPayment = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Row justify="center">
      <Col span={10}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign="left">
          <Form.Item name={["user", "name"]} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "keperluan"]} label="Keperluan Payment" rules={[{ required: true }]}>
            <Input placeholder="-Keperluan Payment-" />
          </Form.Item>
          <Form.Item name={["user", "date"]} label="Tanggal Pembayaran Aktual" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name={["user", "jumlah"]} label="Jumlah Payment" rules={[{ required: true }]}>
            <InputNumber style={{ width: 370 }} min={1} placeholder={"Rp."} />
          </Form.Item>
          <Form.Item name={["user", "terbilang"]} label="Terbilang" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name={["user", "nama penerima"]} label="Nama Rek. / Penerima" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "rekening penerima"]} label="No Rekening Penerima" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Submit Payment Request
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default FormPayment;
