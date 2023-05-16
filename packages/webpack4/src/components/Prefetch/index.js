import React, { Component } from "react";

class Prefetch extends Component {
  constructor(props) {
    super(props);
    this.handlePrefetch = this.handlePrefetch.bind(this);
    this.handlePreload = this.handlePreload.bind(this);
  }

  handlePrefetch() {
    // 相比较Prefetch更能优化性能
    // webpackPrefetch: 会等待核心代码加载完成后空闲下来再去加载对应的文件
    // Webpack替我们在head内添加了这样一行：<link rel="prefetch" as="script" href="0.js">
    import(/* webpackPrefetch: true */ "./test-prefetch").then(
      ({ default: func }) => {
        func();
      }
    );
  }

  handlePreload() {
    // webpackLoad: 和主进程一起加载对应的文件
    import(/* webpackPreload: true */ "./test-preload").then(
      ({ default: func }) => {
        func();
      }
    );
  }

  render() {
    return (
      <div>
        <div>Prefetch</div>
        <button onClick={this.handlePrefetch}>测试Prefetch效果 可以看到</button>
        <br />
        <button onClick={this.handlePreload}>测试Preload效果 可以看到</button>
      </div>
    );
  }
}

export default Prefetch;
