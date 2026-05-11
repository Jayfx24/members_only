const { body, validationResult, matchedData } = require("express-validator");
const { genPwd } = require("../lib/passwordUtils");
const { validateUser } = require("../utils");
const db = require("../models/query");

function getSignUp(req, res, next) {
  res.render("forms/createUser", { title: "Sign Up" });
}

async function postSignUp(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("forms/createUser", {
      title: "Create user",
      errors: errors.array(),
      data: matchedData(req),
    });
  }

  // hash
  const { pwd, cPwd: _, ...data } = matchedData(req);
  data["pwd"] = await genPwd(pwd);

  // add to db
  try {
    await db.addUser(data);
  } catch (err) {
    // err
    next(err);
  }
  res.redirect("/login");
}

async function getLogin(req, res, next) {
  res.render("forms/loginUser", { title: "Login" });
}

async function loginSuccess(req, res, next) {
  res.redirect("/posts/feeds");
}

async function postLogin(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("forms/loginUser", {
      title: "Login",
      errors: errors.array(),
    });
  }
  next()
}

function logout(req, res, next) {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect("/login");
}

// render for 404 and other error

module.exports = {
  getSignUp,
  getLogin,
  postSignUp: [validateUser, postSignUp],
  loginSuccess,
  postLogin,
  logout,
};
