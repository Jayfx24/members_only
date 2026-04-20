const pool = require("../config/pool");

// User queries

async function addUser({ fn, ln, username, pwd }) {
  await pool.query(
    "INSERT INTO users (first_name,last_name,username,pwd) VALUES($1,$2,$3,$4);",
    [fn, ln, username, pwd],
  );
}

async function findUser(username) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = $1;",
    [username],
  );
  console.log(rows[0], username);
  return rows[0];
}

async function findUserId(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1;", [id]);
  return rows[0];
}

module.exports = {
  addUser,
  findUser,
  findUserId,
};
