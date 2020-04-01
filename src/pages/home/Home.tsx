import React, { Component } from 'react';
import './Home.less';
import { Button } from 'antd';
import { createHashHistory } from 'history';

class Home extends Component<any>  {
  constructor(props: any) {
    super(props)
  }
  handleClick(e: any) {
    const history = createHashHistory();
    history.push('/app/setting/user');
  }
  render() {
    return (
      <div className="home">
        <Button onClick={this.handleClick.bind(this)}>跳转到user</Button>
      </div>
    );
  }
}
export default Home;
