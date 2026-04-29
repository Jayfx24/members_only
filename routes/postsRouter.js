const router = require("express").Router();
const {
  allPosts,
  getNewPost,
  postNewPost,
} = require("../controllers/postsController");
const { isAuth, isAdmin } = require("./authMiddleware");

router.use(isAuth);
router.get("/feeds{/:p}", allPosts);
router.get("/:userid/create-post", getNewPost);
router.post("/:userid/create-post", postNewPost);

module.exports = router;
