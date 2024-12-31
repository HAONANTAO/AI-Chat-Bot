import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-managet.js";
export const getAllUser = async (req, res, next) => {
    try {
        //getall users 通过model去数据库找
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ message: "error! not ok!", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
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
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "error! signup not work!", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
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
        // password is corrected
        const token = createToken(existedUser.id.toString(), existedUser.email, "7d");
        // send the token to cookie
        // 7 days set up
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        // update later!!
        res.cookie("auth_token", token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        // end
        return res
            .status(200)
            .json({ message: `user ${existedUser.name} log in successfully!` });
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: "error! signup not work!", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map