import User from "../models/User.js";
import { hash } from "bcrypt";
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
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        // store into User database
        await user.save();
        return res
            .status(200)
            .json({ message: "signup works!", id: user.id.toString() });
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ message: "error! signup not work!", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map