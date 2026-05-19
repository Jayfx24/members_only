const router = require("express").Router();
const {
  allPosts,
  getNewPost,
  postNewPost,
  deletePost,
} = require("../controllers/postsController");
const { isAuth, isMember, isAdmin } = require("./authMiddleware");

router.get("/feeds{/:p}", [isAuth, isMember],  allPosts);
router.get("/create-post", [isAuth, isMember], getNewPost);
router.post("/create-post", [isAuth, isMember], postNewPost);
router.delete("/delete/:id", [isAuth,isAdmin], deletePost);

module.exports = router;
