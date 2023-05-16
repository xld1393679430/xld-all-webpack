import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
        <div>
            <h2>我是多页面应用 --- vue</h2>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root_vue"));
