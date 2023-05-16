import React, { Component } from "react";
class ProvidePlugin extends Component {
  componentDidMount() {
    // 这里虽然没有引入jquery, 但是在webpack.config.base.js里配置了webpack.ProvidePlugin
    // 可以实现让webpack自动引入jquery
    $("#ProvidePlugin").css("background", _join(["skyblue"], ""));
  }

  render() {
    return (
      <div>
        <h5 id="ProvidePlugin">ProvidePlugin</h5>
      </div>
    );
  }
}

export default ProvidePlugin;
