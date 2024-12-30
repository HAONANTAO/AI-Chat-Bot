import User from "../models/User.js";
import e, { NextFunction, Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";
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
    bcrypt.compare(password, existedUser.password, (err, result) => {
      if (err) {
        return res.status(400).json({ message: "password is not corrected" });
      } else {
        return res
          .status(201)
          .json({ message: "find the user and login", name: existedUser.name });
      }
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error! signup not work!", cause: error.message });
  }
};
