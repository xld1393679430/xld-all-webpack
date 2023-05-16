import React, { Component } from "react";
import axios from "axios";

class TestRequestRelay extends Component {
  constructor(props) {
    super(props);
    this.handleRequestRelay = this.handleRequestRelay.bind(this);
  }

  handleRequestRelay() {
    axios.get("/react/api/header.json").then((res) => {
      console.log("handleRequestRelay success -> ", res);
    }).catch(err => {
      console.log("handleRequestRelay -> error", err.response);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRequestRelay}>测试请求转发</button>
      </div>
    );
  }
}

export default TestRequestRelay;
