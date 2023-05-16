import React, { Component } from "react";
import dayjs from "dayjs";

class TestCodeSplit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      now: dayjs().format('YYYY-MM-DD')
    })
  }

  render() {
    const { now } = this.state
    return (
      <div>
        <div>TestCodeSplit</div>
        <button onClick={this.handleClick}>测试code split   点我   --{now}</button>
      </div>
    );
  }
}

export default TestCodeSplit;
