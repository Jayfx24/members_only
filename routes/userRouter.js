const router = require("express").Router();
const { isAuth, isAdmin } = require("./authMiddleware");
const { getProfile } = require("../controllers/userController");

router.use(isAuth)
router.get('/',getProfile)

module.exports = router