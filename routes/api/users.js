const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrl.getCurrentUser);
router.put("/update/:userId", auth, ctrl.updateUserById);
router.get("/all", auth, ctrl.getAllUsers);
router.delete("/remove/:userId", auth, ctrl.removeUserById);
router.post("/create", auth, ctrl.createUser);

module.exports = router;
