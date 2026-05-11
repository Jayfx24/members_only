const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models/query");
const { validPwd, genPwd } = require("../lib/passwordUtils");

const customFields = {
  usernameField: "username",
  passwordField: "pwd",
};

const verifyCb = async (username, pwd, done) => {
  try {
    const user = await db.findUser(username);
    if (!user) return done(null, false);
    const isValid = await validPwd(pwd, user.pwd);
    return isValid ? done(null, user) : done(null, false);
  } catch (err) {
    done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCb);
passport.use(strategy);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((userId, done) => {
  db.findUserId(userId)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
