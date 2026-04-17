const { body, validationResult, matchedData } = require("express-validator");
const { genPwd, validPwd } = require("../lib/passwordUtils");
const { validateUser } = require("../utils");

function getSignUp(req, res) {
  res.render("forms/createUser", { title: "Sign Up" });
}

function postSignUp(req, res) {
  // console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("forms/createUser", {
      title: "Create user",
      errors: errors.array(),
      data: matchedData(req),
    });
  }
  // hash
  const { pwd } = matchedData(req);
  // add to db
  console.log(matchedData(req));
  console.log(genPwd(pwd));
  res.redirect("/");
}

module.exports = {
  getSignUp,
  postSignUp: [validateUser, postSignUp],
};
