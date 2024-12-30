import { body, validationResult } from "express-validator";
// 总检查器运行
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                // 某次验证结果不为空（即出现验证错误）
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            // 没有error就继续运行下一个
            next();
        }
        // have error有
        return res.status(422).json({ errors: errors.array() });
    };
};
// signup单独的检查器
export const signupValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("email").trim().isEmail().withMessage("email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .notEmpty()
        .withMessage("password is required"),
];
//# sourceMappingURL=validator.js.map