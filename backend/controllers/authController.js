const { createUser, findUser } = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/hash");

const register = async (req, res) => {
  const { username, password } = req.body;

  const hashed = await hashPassword(password);
  await createUser(username, hashed);

  res.json({ message: "User registered" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await findUser(username);

  if (!user.rows[0]) {
    return res.status(400).json({ message: "User not found" });
  }

  const valid = await comparePassword(password, user.rows[0].password);

  if (!valid) {
    return res.status(400).json({ message: "Wrong password" });
  }

  req.session.user = user.rows[0];

  res.json({ message: "Login success" });
};

const dashboard = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({ message: "Welcome " + req.session.user.username });
};

const logout = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
};

module.exports = { register, login, dashboard, logout };