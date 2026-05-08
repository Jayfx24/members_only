const router = require("express").Router();
const { isAuth, isAdmin } = require("./authMiddleware");
const {
  getProfile,
  joinClub,
  getJoinClub,
  getAdmin,
  postAdmin,
} = require("../controllers/userController");
const { validateMember, validateAdmin } = require("../utils");
// router.use(isAuth)
router.get("/admin", isAuth, getAdmin);
router.post("/admin", isAuth, validateAdmin, postAdmin);
router.get("/join-club", isAuth, getJoinClub);
router.post("/join-club", isAuth, validateMember, joinClub);
router.get("/profile{/:p}", isAuth, getProfile);

module.exports = router;
