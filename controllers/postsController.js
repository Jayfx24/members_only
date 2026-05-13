const db = require("../models/query");
const pagination = require("../lib/pagination");

async function allPosts(req, res) {
  const allPosts = res.locals.currentUser.member
    ? await db.detailedPosts()
    : await db.posts();
    let p = req.query.p;
   
  const { page, pageCount, posts } = pagination(allPosts, p);
  res.render("feeds", { title: "Feeds", posts, pageCount });
}

async function getNewPost(req, res) {
  res.render("forms/createPost", { title: "New Message" });
}

async function postNewPost(req, res) {
  // if user is authenticated add new post to db
  const { title, message } = req.body;
  const userID = req.user.id;
  await db.newPost({ title: title.trim(), message, userID });
  res.redirect("/posts/feeds");
}

async function deletePost(req, res) {
  await db.delePost(req.params.id);
  console.log(req.params.id, " deleted");
  res.redirect("/posts/feeds");
}

module.exports = {
  allPosts,
  getNewPost,
  postNewPost,
  deletePost
};
