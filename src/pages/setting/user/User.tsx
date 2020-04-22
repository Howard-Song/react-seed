import React, { Component } from "react";
import "./User.less";
import { Button } from "antd";
import { createHashHistory } from "history";
import { withRouter } from "react-router";

class User extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  handleClick() {
    this.props.history.push("/app/taskManage/list");
  }
  render() {
    return (
      <div className="user">
        <Button onClick={this.handleClick.bind(this)}>跳转到任务</Button>
      </div>
    );
  }
}
export default withRouter(User);
