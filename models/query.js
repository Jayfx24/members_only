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

async function addMember(status, date, id) {
  await pool.query(
    "UPDATE users SET member = $1, member_since = $2 WHERE id = $3",
    [status, date, id],
  );
}
// posts
async function detailedPosts() {
  const { rows } = await pool.query(
    "SELECT posts.*,users.username FROM posts JOIN users ON posts.author_id = users.id;",
  );

  return rows;
}
async function posts() {
  // if user not authenticated send only msg
  const { rows } = await pool.query("SELECT title, message FROM posts;");
  return rows;
}

async function newPost({ title, message, userID }) {
  await pool.query(
    "INSERT INTO posts (title,message,author_id) VALUES($1,$2,$3)",
    [title, message, userID],
  );
}

// get user posts

async function userPosts(id) {
  const { rows } = await pool.query(
    "SELECT title, message, author_id, created_at FROM posts WHERE author_id = $1;",
    [id],
  );
  return rows;
}

module.exports = {
  addUser,
  findUser,
  findUserId,
  addMember,
  posts,
  detailedPosts,
  newPost,
  userPosts,
};

// posts
