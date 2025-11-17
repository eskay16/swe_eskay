import { body } from "express-validator";

export const validators = (validate) => async (req, res, next) => {
  for (const validates of validate) {
    const result = await validates.run(req);
    if (!result.isEmpty()) {
      console.log(result.array());
      return res.status(400).json({ errors: result.array() });
    }
  }
  console.log("Details validated successfully");

  next();
};

export const signUpValidators = [
  body("userName").notEmpty().escape().trim().withMessage("Invalid userName"),
  body("password").notEmpty().escape().trim().withMessage("Invalid password"),
];

export const detailsValidators = [
  body("firstName")
    .notEmpty()
    .trim()
    .escape()
    .isAlpha()
    .isByteLength({ min: 3, max: 30 })
    .withMessage("invalid firstName"),
  body("lastName")
    .notEmpty()
    .trim()
    .escape()
    .isAlpha()
    .isByteLength({ min: 3, max: 30 })
    .withMessage("invalid lastName"),
  body("age").notEmpty().isInt({ min: 6, max: 99 }).withMessage("invalid age"),
  body("email")
    .notEmpty()
    .trim()
    .isEmail()
    .escape()
    .withMessage("invalid email"),
  body("gender")
    .notEmpty()
    .trim()
    .escape()
    .isByteLength({ min: 1, max: 1 })
    .isIn(["m", "f"])
    .withMessage("can only be m or f"),
];

export const friendValidator = [
  body("friendName")
  .notEmpty()
  .escape()
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("invalid friend name"),
  body("friendTag")
  .notEmpty()
  .escape()
  .trim()
  .withMessage("invalid friend Tag")
];