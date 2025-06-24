const express = require("express");
const { registerUser, loginUser } = require("../controller/authController.js");
const { registerStartup } = require("../controller/registerStartup.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/startupReg", registerStartup);

module.exports = router;
