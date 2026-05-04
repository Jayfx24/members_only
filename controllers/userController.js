const db = require("../models/query");
const pagination = require("../lib/pagination");

async function getProfile(req, res, next) {
  const profile = await db.findUserId(req.user.id);
  const userPosts = await db.userPosts(req.user.id);

  let p = req.query.p;
  const { page, pageCount, posts } = pagination(userPosts, p);

  res.render("profile", {
    profile,
    posts,
    pageCount,
    postsLength: userPosts.length || null,
    title: `${profile.username.toUpperCase()}|Profile`,
  });
}

module.exports = { getProfile };
