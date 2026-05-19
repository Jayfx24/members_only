const router = require("express").Router();
const passport = require("passport");
const { validateLogin } = require("../utils");
const {
  getSignUp,
  getLogin,
  postSignUp,
  loginSuccess,
  postLogin,
  logout,
} = require("../controllers/indexController");
const { isAuth } = require("./authMiddleware");


router.get("/register", getSignUp);
router.post("/register", postSignUp);
router.get("/login", getLogin);
router.get("/feeds",isAuth, loginSuccess);
router.post(
  "/login",
  [validateLogin, postLogin],
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/feeds",
  }),
);
router.get("/logout", logout);
router.get("/", (req, res) => res.redirect("/login"));
module.exports = router;
