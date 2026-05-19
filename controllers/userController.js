const db = require("../models/query");
const pagination = require("../lib/pagination");

const { validationResult, matchedData } = require("express-validator");

async function getProfile(req, res, next) {
  const profile = await db.findUserId(req.user.id);
  const userPosts = await db.userPosts(req.user.id);
  let p = req.query.p;
  const { page, pageCount, posts } = pagination(userPosts, p,4);

  res.render("profile", {
    profile,
    posts,
    pageCount,
    postsLength: userPosts.length || null,
    title: `${profile.username.toUpperCase()}|Profile`,
  });
}

function getJoinClub(req, res) {
  res.render("join-club", { title: "Member" });
}
async function joinClub(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("join-club", {
      title: "Member",
      errors: errors.array(),
    });
  }
  const pwd = matchedData(req)["join-pwd"];
  await db.addMember(true, new Date(), req.user.id);
  res.redirect("/posts/feeds");
}



function getAdmin(req, res) {
  res.render("join-club", { title: "Become our admin" });
}

async function postAdmin(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("join-club", {
      title: "Become our admin",
      errors: errors.array(),
    });
  }

  // add query to make admin
  await db.addAdmin(true, req.user.id);
  res.redirect(`/${res.locals.currentUser.username}/profile`);
}

module.exports = { getProfile, getJoinClub, joinClub, getAdmin, postAdmin };
