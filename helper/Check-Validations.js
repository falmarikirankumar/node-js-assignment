const { check, query } = require("express-validator");

const CVC = {
  formId: [check("formId").notEmpty().withMessage("formId is required")],
  title: [check("title").notEmpty().withMessage("title is required")],
  name: [check("name").notEmpty().withMessage("name is required")],
  isgraduate: [
    check("isgraduate").notEmpty().withMessage("isgraduate is required"),
  ],
  email: [
    check("email").notEmpty().withMessage("email is required"),
    check("email").isEmail().withMessage("enter valid email"),
  ],
  phoneNumber: [
    check("phoneNumber").notEmpty().withMessage("phone number is required"),
  ],
};

module.exports = CVC;
