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

async function addAdmin(status, id) {
  await pool.query("UPDATE users SET admin = $1 WHERE id = $2", [status, id]);
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
  const { rows } = await pool.query("SELECT id, title, message FROM posts;");
  return rows;
}
async function findPost(id) {
  const { rows } = await pool.query("SELECT * FROM posts WHERE id = $1;", [id]);
  return rows[0];
}

async function newPost({ title, message, userID }) {
  await pool.query(
    "INSERT INTO posts (title,message,author_id) VALUES($1,$2,$3)",
    [title, message, userID],
  );
}

async function delePost(postID) {
  await pool.query("DELETE FROM posts WHERE id = $1 ", [postID]);
}

// get user posts

async function userPosts(id) {
  const { rows } = await pool.query(
    "SELECT * FROM posts WHERE author_id = $1;",
    [id],
  );
  return rows;
}

module.exports = {
  addUser,
  findUser,
  findUserId,
  addMember,
  addAdmin,
  posts,
  detailedPosts,
  newPost,
  findPost,
  delePost,
  userPosts,
};

// posts
