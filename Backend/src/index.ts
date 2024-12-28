import express from "express";

// 创建app
const app = express();

// 端口监听
app.listen(3000, () => {
  console.log("listening the port 3000!");
});
