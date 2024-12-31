import User from "../models/User.js";
import e, { NextFunction, Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-managet.js";
import { COOKIE_NAME } from "../utils/constants.js";

// 通用错误处理函数
const handleError = (res: Response, error: any) => {
  console.log(error);
  res.status(500).json({ message: "An error occurred", cause: error.message });
};

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //getall users 通过model去数据库找
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error! not ok!", cause: error.message });
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    // store into User database

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    // await User.create(user);

    // token

    // 首先清除之前的
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      path: "/",
      signed: true,
    });
    // password is corrected
    const token = createToken(user.id.toString(), user.email, "7d");
    // send the token to cookie

    // 7 days set up
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    // update later!!
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    // end
    return res
      .status(201)
      .json({ message: "signup works!", id: user.id.toString() });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error! signup not work!", cause: error.message });
  }
};
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // 没有名字
    const { email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (!existedUser)
      return res.status(201).json("user not registered ,please check again ");
    // result是boolean(true) check password
    const isPasswordCorrected = await compare(password, existedUser.password);
    if (!isPasswordCorrected) {
      return res.status(403).json({ message: "Incorrect password" });
    }
    // 首先清除之前的
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      domain: "127.0.0.1",
      path: "/",
      signed: true,
    });
    // password is corrected
    const token = createToken(
      existedUser.id.toString(),
      existedUser.email,
      "7d",
    );
    // send the token to cookie

    // 7 days set up
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    // update later!!
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "127.0.0.1",
      expires,
      httpOnly: true,
      signed: true,
    });
    // end
    return res
      .status(200)
      .json({ message: `user ${existedUser.name} log in successfully!` });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "error! signup not work!", cause: error.message });
  }
};
