import React, { Component } from "react";
import "./Login.less";
import { Form, Input, Button } from "antd";
import { withRouter } from "react-router";
const layout: any = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout: any = {
  wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component<any> {
  formRef: any = React.createRef();
  constructor(props: any) {
    super(props);
  }
  onFinish(values: any) {
    this.props.history.push("/pages/home");
  }
  onFinishFailed(errorInfo: any) {
    console.log("Failed:", errorInfo);
  }
  onReset() {
    this.formRef.current;
  }

  render() {
    return (
      <div className="main">
        <section>
          <Form
            {...layout}
            ref={this.formRef}
            name="control-ref"
            onFinish={this.onFinish.bind(this)}
          >
            {/* <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input />
            </Form.Item> */}
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={this.onReset.bind(this)}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
