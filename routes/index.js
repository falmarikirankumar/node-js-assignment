const express = require("express");
const { Form, FormData } = require("../connection/index");
const { v4: uuidv4 } = require("uuid");
const CVC = require("../helper/Check-Validations");
const { query } = require("express-validator");
const { validationResult } = require("express-validator");
const Base = require("../helper/baseController");
const router = express.Router();

// Create form
router.post("/form", CVC.title, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(Base.sendError({ errors: errors.mapped() }));
    }
    const { title } = req.body;
    const form = await Form.create({ id: uuidv4(), title });
    return res.send(Base.sendResponse(form, "Form Created", 201));
  } catch (error) {
    return res.send(Base.sendError(error.message));
  }
});

// Fill data
router.post(
  "/fill-data",
  CVC.formId,
  CVC.name,
  CVC.email,
  CVC.phoneNumber,
  CVC.isgraduate,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(Base.sendError({ errors: errors.mapped() }));
      }
      const { formId, name, email, phoneNumber, isgraduate } = req.body;

      if (!uuidv4(formId)) {
        return res.send(Base.sendError("Invalid UUID format for formId"));
      }

      const formData = await FormData.create({
        id: uuidv4(),
        formId,
        name,
        email,
        phoneNumber,
        isgraduate,
      });
      return res.send(Base.sendResponse(formData, "Form Filled", 201));
    } catch (error) {
      return res.send(Base.sendError(error.message));
    }
  }
);

// Get all data for a form
router.get(
  "/form-data",
  [query("form_title").notEmpty().withMessage("title is required")],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.send(Base.sendError({ errors: errors.mapped() }));
      }
      const { form_title } = req.query;
      const form = await Form.findOne({
        where: { title: form_title },
        include: FormData,
      });
      if (!form) {
        return res.send(Base.sendError("Form not found"));
      }
      return res.send(Base.sendResponse(form.FormData, "Get Filled Data", 200));
    } catch (error) {
      return res.send(Base.sendError(error.message));
    }
  }
);

module.exports = router;
