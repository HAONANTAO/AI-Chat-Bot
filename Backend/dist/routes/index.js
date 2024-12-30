import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
// 主路由创建router
const appRouter = Router();
// 分路由集合routes
appRouter.use("/user", userRoutes); //api/v1/user
appRouter.use("/chats", chatRoutes); //api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map