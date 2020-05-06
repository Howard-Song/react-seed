import React from "react";
import styles from "./Login.module.less";
import { Form, Input, Button, Select } from "antd";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    props.history.push("/pages/home");
  };

  const onReset = () => {
    form.resetFields();
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };
  return (
    <div className={styles.main}>
      {/* {console.log(styles)} */}
      <Form
        form={form}
        className={styles["login-form"]}
        name="control-hooks"
        onFinish={onFinish}
      >
        <nav>React-Seed基于antd的Typescript种子工程</nav>

        <Form.Item
          {...layout}
          name="username"
          label="用户名："
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...layout}
          name="password"
          label="密码："
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(Login);
