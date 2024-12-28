import express from "express";
// 创建app
const app = express();
// 配置用于解析 application/json 格式数据的中间件
app.use(express.json());
// 配置用于解析 application/x-www-form-urlencoded 格式数据的中间件（表单数据）
app.use(express.urlencoded({ extended: true }));
// GET
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`The user ID from the path parameter is: ${userId}`);
});
// PUT
app.post("/hello", (req, res, next) => {
    return res.send(req.body.name);
});
// POST
// DELETE
// 端口监听
app.listen(3000, () => {
    console.log("listening the port 3000!");
});
//# sourceMappingURL=index.js.map