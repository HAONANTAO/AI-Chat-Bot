import { Router } from "express";
import {
  getAllUser,
  userSignup,
  userLogin,
} from "../controllers/user-controller.js";
import {
  validate,
  signupValidator,
  loginValidator,
} from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUser);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
export default userRoutes;
