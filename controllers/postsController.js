const db = require("../models/query");
const pagination = require("../lib/pagination");
async function allPosts(req, res, next) {
  const allPosts = await db.posts();
  let p = req.query.p;
  const { page, pageCount, posts } = pagination(allPosts, p);
  res.render("feeds", { title: "Feeds", posts });
}

async function getNewPost(req, res, next) {
  res.render("forms/createPost", { title: "New Message" });
}

async function postNewPost(req, res, next) {
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
