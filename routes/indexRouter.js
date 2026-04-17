const router = require("express").Router();
const { getSignUp, postSignUp } = require("../controllers/indexController");

router.get("/register", getSignUp);
router.post("/register", postSignUp);
router.get("/", (req, res) => res.send("at home page"));
module.exports = router;
