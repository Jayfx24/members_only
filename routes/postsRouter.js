const router = require("express").Router();
const {
  allPosts,
  getNewPost,
  postNewPost,
  deletePost,
} = require("../controllers/postsController");
const { isAuth, isMember, isAdmin } = require("./authMiddleware");

router.use(isAuth);
router.get("/feeds{/:p}", allPosts);
router.get("/create-post", isMember, getNewPost);
router.post("/create-post", isMember, postNewPost);
router.delete("/delete/:id", isAdmin, deletePost);

module.exports = router;
