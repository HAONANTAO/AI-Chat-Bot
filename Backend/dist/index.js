import express from "express";
// 创建app
const app = express();
// GET
app.get("/hello", (req, res, next) => {
    console.log("this is the get requested");
    return res.send("hello");
});
// PUT
app.put("/", (req, res, next) => {
    console.log("this is the get requested");
});
// POST
// DELETE
// 端口监听
app.listen(3000, () => {
    console.log("listening the port 3000!");
});
//# sourceMappingURL=index.js.map