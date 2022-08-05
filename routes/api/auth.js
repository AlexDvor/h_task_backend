const express = require("express");
const router = express.Router();
const { validation, auth } = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers/index");
const { registerJoiSchema, loginJoiSchema } = require("../../schemas");

router.post("/sign-up", validation(registerJoiSchema), ctrl.register);
router.post("/log-in", validation(loginJoiSchema), ctrl.login);
router.get("/log-out", auth, ctrl.logout);

module.exports = router;
