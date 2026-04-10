const db = require("../config/db");

const createUser = (username, password) => {
  return db.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    [username, password]
  );
};

const findUser = (username) => {
  return db.query(
    "SELECT * FROM users WHERE username=$1",
    [username]
  );
};

module.exports = { createUser, findUser };