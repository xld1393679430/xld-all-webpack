// import "@babel/polyfill"; // polyfill会污染全局环境 推荐使用@babel/plugin-transform-runtime

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Header,
  TestCodeSplit,
  DynamicImport,
  Prefetch,
  ProvidePlugin,
  TestRequestRelay,
} from "@/components";
import { Detail, List, JSX } from "@/pages";
import TestTypescript from "./components/TestTypescript/index.ts";
import { add } from "./utils";
import ImageSight from "./images/sight.jpeg";
import Shanghai from "./images/shanghai.jpeg";

import styles from "./css/avatar.css";
import "./css/index.css";

// 开启Service-Worker pwa
// 页面访问过一次后即使服务关闭了也可以再访问
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        console.log("serviceWorker -> 注册成功");
      })
      .catch((err) => {
        console.log("serviceWorker ->  注册失败");
      });
  });
}

const img1 = new Image();
img1.src = ImageSight;
img1.classList.add("sight");

const img2 = new Image();
img2.src = Shanghai;
img2.classList.add(styles.avatar);

const iconfont = document.createElement("i");
iconfont.className = "iconfont icon-lianjie";

const button = document.createElement("button");
button.innerText = "添加";
let addIndex = 0;
button.onclick = function () {
  const div = document.createElement("div");
  div.innerText = "item";
  div.className = addIndex % 2 ? "even" : "odd";
  root.appendChild(div);
  addIndex++;
};

const root = document.getElementById("root-js");
root.appendChild(img1);
root.appendChild(img2);
root.appendChild(iconfont);
root.appendChild(button);

const es6Fn = (text) => {
  console.log("我是es6的箭头函数方法", text);
};
es6Fn("哈哈");

new Header();

console.log(this, "hello world112");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>hello React--{count}</h1>
        <TestCodeSplit />
        <br />

        <DynamicImport />
        <br />

        <Prefetch />
        <br />

        <ProvidePlugin />
        <br />

        <button
          onClick={() => {
            const ss = new TestTypescript("测试typescript -> 成功");
            ss.alertData();
          }}
        >
          测试typescript
        </button>
        <br />

        <TestRequestRelay />
        <br />

        <BrowserRouter>
          <>
            <Route path="/list" component={List} />
            <Route path="/detail" component={Detail} />
            <Route path="/jsx" component={JSX} />
          </>
        </BrowserRouter>
        <div>
          <a href="/list">to list page</a>
        </div>
        <div>
          <a href="/detail">to detail page</a>
        </div>
        <div>
          <a href="/jsx">to jsx page</a>
        </div>
        <br />
        <button
          onClick={() => {
            this.setState({
              count: add(1, count),
            });
          }}
        >
          add
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root-react"));
