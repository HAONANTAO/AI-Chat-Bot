import express from "express";

// 创建app
const app = express();

// middlewares
// 配置用于解析 application/json 格式数据的中间件
app.use(express.json());
// 配置用于解析 application/x-www-form-urlencoded 格式数据的中间件（表单数据）
app.use(express.urlencoded({ extended: true }));

// connections and listeners
// 端口监听
app.listen(3000, () => {
  console.log("listening the port 3000!");
});

// mongodb+srv://Aaron1314:<db_password>@cluster0.p1ulw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
