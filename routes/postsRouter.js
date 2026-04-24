const router = require("express").Router();
const {
  allPosts,
  getNewPost,
  postNewPost,
} = require("../controllers/postsController");
const { isAuth, isAdmin } = require("./authMiddleware");

router.get("/feeds", isAuth, allPosts);
router.get("/:userid/create-post", isAuth, getNewPost);
router.post("/:userid/create-post", isAuth, postNewPost);

module.exports = router;
