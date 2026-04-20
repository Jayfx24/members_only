const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models/query");
const { validPwd } = require("../lib/passwordUtils");

const customFields = {
  usernameField: "username",
  passwordField: "pwd",
};

const verifyCb = async (username, passport, done) => {
  try {
    const user = await db.findUser(username);
    if (!user) return done(null, false);

    return validPwd(passport, user.pwd) ? done(null, user.id) : done(null, false);
  } catch (err) {
    done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCb);

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((userId, done) => {
    console.log('user id ='+userId)
  db.findUserId(userId).then((user) =>
     done(null, user.id)).catch((err) => done(err))
});
