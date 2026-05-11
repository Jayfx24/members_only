require("dotenv").config;
require("./config/passport");
const express = require("express");
const path = require("node:path");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const Pool = require("./config/pool");
const indexRoutes = require("./routes/indexRouter");
const postsRoutes = require("./routes/postsRouter");
const userRoutes = require("./routes/userRouter");
const passport = require("passport");
const customError = require("./errors/CustomError");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  session({
    store: new pgSession({
      pool: Pool,
      tableName: "user-sessions",
      createTableIfMissing: true,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  }),
);
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.authenticated = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/:user", userRoutes);
app.use("/posts", postsRoutes);
app.use("/", indexRoutes);
app.use(function (req, res) {
  res.status(404).send("Page not found");
});
app.use(customError);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port: ${PORT}`);
});
