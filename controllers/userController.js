const db = require("../models/query");

async function getProfile(req, res, next) {
  const profile = await db.findUserId(req.user.id);
  res.render("profile", { profile, title: `${profile.username.toUpperCase()}|Profile` });
}

module.exports = {getProfile}