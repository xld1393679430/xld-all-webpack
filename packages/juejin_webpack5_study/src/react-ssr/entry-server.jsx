import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "./App";

const path = require("path");
const open = require("open");
const clientManifest = require("./dist/manifest-client.json");
const server = express();

server.get("/", (req, res) => {
  const html = renderToString(<App />);
  const clientCss = clientManifest["client.css"];
  const clientBundle = clientManifest["client.js"];  
  res.send(`
		<!DOCTYPE html>
		<html>
			<head>
			<title>React SSR Example</title>
			<link rel="stylesheet" href="${clientCss}"></link>
			</head>
			<body>
			<!-- 注入组件运行结果 -->
			<div id="root">${html}</div>
			<!-- 注入客户端代码产物路径 -->
			<!-- 实现 Hydrate 效果 -->
			<script src="${clientBundle}"></script>
			</body>
		</html>
	`);
});

server.use(express.static(path.join(process.cwd(), "./src", "./react-ssr/dist")));

server.listen(8080, () => {
  open(`http://localhost:8080`);
});
