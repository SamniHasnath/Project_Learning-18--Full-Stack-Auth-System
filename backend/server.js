const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});