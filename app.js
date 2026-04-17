require("dotenv").config;
const express = require("express");
const path = require("node:path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const Pool = require("./models/pool");
const indexRouter = require("./routes/indexRouter");

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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port: ${PORT}`);
});
