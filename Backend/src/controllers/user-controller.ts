import User from "../models/User.js";
import { NextFunction, Request, Response } from "express";
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
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error! not ok!", cause: error.message });
  }
};
