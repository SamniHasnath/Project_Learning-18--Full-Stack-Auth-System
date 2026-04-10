const express = require("express");
const router = express.Router();

const {
  register,
  login,
  dashboard,
  logout
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", dashboard);
router.get("/logout", logout);

module.exports = router;