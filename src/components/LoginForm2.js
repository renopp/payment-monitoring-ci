import React from "react";
import { Select, Form, Input, Button, Col, Row } from "antd";
import { useHistory } from "react-router-dom";
import { ImportantDevices } from "@material-ui/icons";

const LoginForm2 = () => {
  const { Option } = Select;
  const history = useHistory();
  const navigateTo = () => history.push("/beranda");

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [role, setRole] = React.useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUsernameChange = React.useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = React.useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  // const handleRoleChange = React.useCallback((e) => {
  //   setRole(e.target.value);
  // }, []);

  return (
    <Row justify="center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "40px", paddingRight: "40px", paddingLeft: "40px" }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "text",
            },
          ]}
        >
          <Input value={username} onChange={handleUsernameChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" },]}
        >
          <Input.Password value={password} onChange={handlePasswordChange} 
          style={{ marginLeft: "0px" }}
          />
        </Form.Item>


        <Form.Item
          label="Login As"
          rules={[{ required: true, message: "Please input your Role!" }]}
        >
          <Select defaultValue="- Login As -">
            <Option value="accounting">Accounting</Option>
            <Option value="admin">Admin</Option>
            <Option value="generalsupport">General Support</Option>
          </Select>
        </Form.Item>

        <Col span={12} offset={6}>
          <Row justify="center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                // onClick={() => {
                //   console.log("test value >> ", username, password);
                // }}
                onClick={navigateTo}
                style={{
                  backgroundColor: "#09539C ",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: "10px",
                  
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Row>
        </Col>
      </Form>
    </Row>
  );
};

export default LoginForm2;
