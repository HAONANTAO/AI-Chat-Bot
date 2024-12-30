import { Router } from "express";
import { getAllUser, userSignup } from "../controllers/user-controller.js";
import { validate, signupValidator } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/signup", validate(signupValidator), userSignup);
export default userRoutes;
