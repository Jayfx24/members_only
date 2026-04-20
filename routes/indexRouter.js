const router = require("express").Router();
const passport = require("passport");

const {
  getSignUp,
  getLogin,
  postSignUp,
  getLoginSuccess,
  logout,
} = require("../controllers/indexController");

router.get("/register", getSignUp);
router.post("/register", postSignUp);
router.get("/login", getLogin);
router.get("/login-success", getLoginSuccess);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/login-success",
  }),
);
router.get("/logout", logout);
router.get("/", (req, res) => res.send("at home page"));
module.exports = router;
