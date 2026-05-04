const router = require("express").Router();
const {
  allPosts,
  getNewPost,
  postNewPost,
} = require("../controllers/postsController");
const { isAuth, isAdmin } = require("./authMiddleware");

router.use(isAuth);
router.get("/feeds{/:p}", allPosts);
router.get("/create-post", getNewPost);
router.post("/create-post", postNewPost);

module.exports = router;
