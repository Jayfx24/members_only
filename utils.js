const { body } = require("express-validator");
const db = require("./models/query");
const err = {
  alpha: "must only contain letters.",
  length: (min, max) => `must be between ${min} and ${max} characters`,
  leastLen: (min) => `must be at least ${min} characters`,
  passMatch: "must match",
  notEmpty: "can not be empty",
};

const validateUser = [
  body("fn")
    .trim()
    .notEmpty()
    .withMessage(`First name ${err.notEmpty}`)
    .isAlpha()
    .withMessage(`First name ${err.alpha}`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`First name ${err.length(3, 15)}`),
  body("ln")
    .trim()
    .notEmpty()
    .withMessage(`Last name ${err.notEmpty}`)
    .isAlpha()
    .withMessage(`Last name ${err.alpha}`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`Last name ${err.length(3, 15)}`),
  body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username name ${err.notEmpty}`)
    .isLength({ min: 4, max: 10 })
    .withMessage(`Username ${err.length(4, 10)}`),
  body("pwd").trim().notEmpty().withMessage(`Password ${err.notEmpty}`),
  // .isLength({ min: 8 })
  // .withMessage(`Password ${err.leastLen(8)}`)
  // .isStrongPassword({
  //   min: 8,
  //   minLowercase: 1,
  //   minUppercase: 1,
  //   minSymbols: 1,
  // })
  // .withMessage(
  //   `Password must be a combination of one uppercase , one lowercase, one special char`,
  // ),
  body("cPwd")
    .trim()
    .notEmpty()
    .withMessage(`Confirm password ${err.notEmpty}`)
    .custom((value, { req }) => value === req.body.pwd)
    .withMessage(`The passwords ${err.passMatch}`),
];

const validateLogin = [
  body("username")
    .trim()
    .notEmpty()
    .custom(async (value) => {
      const user = await db.findUser(value);
      console.log(value,user)
      if (!user) throw new Error("User not found");
    }),
];
module.exports = { validateUser, validateLogin };
