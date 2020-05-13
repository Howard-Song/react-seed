import React, { Component } from "react";
import "./Home.less";
import { Button } from "antd";
import { withRouter } from "react-router";
class Home extends Component<any, any> {
  arr = [{ name: 1, id: 1 }];

  constructor(props: any) {
    super(props);
  }
  handleClick() {
    this.props.history.push("/pages/setting/user");
  }
  render() {
    return (
      <div className="home">
        <Button onClick={this.handleClick.bind(this)}>跳转到user</Button>
      </div>
    );
  }
}

export default withRouter(Home);
