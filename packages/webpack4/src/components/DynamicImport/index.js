import React, { Component } from "react";

class DynamicImport extends Component {
  constructor(props) {
    super(props);

    this.getComponent = this.getComponent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getComponent() {
    // webpackChunkName是可以配置打包后的文件名
    return import(/* webpackChunkName:"lodash" */ "lodash").then(
      ({ default: _ }) => {
        return _.join(["aa", "bb"], "&&&");
      }
    );
  }

  handleClick() {
    this.getComponent().then((data) => {
      console.log("handleClick------DynamicImport----", data);
    });
  }

  render() {
    return (
      <div>
        <div>DynamicImport</div>
        <button onClick={this.handleClick}>Lazyload</button>
      </div>
    );
  }
}

export default DynamicImport;
