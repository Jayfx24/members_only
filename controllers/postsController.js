const db = require("../models/query");

async function allPosts(req, res) {
  const posts = await db.posts();
  res.render("feeds", {title: 'Feeds', posts });
}

async function getNewPost(req, res) {
  res.render("forms/createPost",{title: 'New Message' });
}

async function postNewPost(req, res) {
  // if user is authenticated add new post to db
  const { title, message } = req.body;
  const userID = req.user.id;
  console.log({ title, message, userID });
  await db.newPost({ title: title.trim(), message, userID });
  res.redirect("/posts/feeds");
}

module.exports = {
  allPosts,
  getNewPost,
  postNewPost,
};
