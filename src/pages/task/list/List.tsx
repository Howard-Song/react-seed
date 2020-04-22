import React, { Component } from "react";
import "./List.less";
import { withRouter } from "react-router";
import { Button } from "antd";

class TaskList extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  handleClick() {
    this.props.history.push("/app/home");
  }
  render() {
    return (
      <div className="list">
        <Button onClick={this.handleClick.bind(this)}>跳转到home</Button>
      </div>
    );
  }
}
export default withRouter(TaskList);
