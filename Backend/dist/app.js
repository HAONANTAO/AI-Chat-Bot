import express from "express";
// 从 dotenv 库中引入的 config 函数，在执行时会自动查找项目根目录下名为 .env 的文件
import { config } from "dotenv";
config();
// 创建app
const app = express();
// middlewares
// 配置用于解析 application/json 格式数据的中间件
app.use(express.json());
// 配置用于解析 application/x-www-form-urlencoded 格式数据的中间件（表单数据）
app.use(express.urlencoded({ extended: true }));
export default app;
//# sourceMappingURL=app.js.map