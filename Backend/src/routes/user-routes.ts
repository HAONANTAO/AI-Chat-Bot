import { Router } from "express";
import { getAllUser, userSignup } from "../controllers/user-controller.js";

const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.get("/signup", userSignup);
export default userRoutes;
