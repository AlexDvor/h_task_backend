const express = require("express");
const router = express.Router();
const { validation, auth, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subJoiSchema, emailJoiSchema } = require("../../schemas");

// router.get("/current", auth, ctrl.getCurrent);
router.put("/update/:userId", auth, ctrl.updateUserById);
router.get("/all", auth, ctrl.getAllUsers);
router.delete("/delete/:userId", auth, ctrl.removeUserById);

module.exports = router;
