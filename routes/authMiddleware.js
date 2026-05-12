const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else {
    res
      .status(401)
      .json({ msg: "You are not authorizes to view this resource" });
  }
};

const isMember = (req, res, next) => {
  if (req.isAuthenticated() && res.locals.currentUser.member) next();
  else {
    res
      .status(401)
      .json({ msg: "You are not authorizes to view this resource" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req?.user?.admin) next();
  else {
    res.status(401).json({
      msg: "You are not authorized,because you are not an admin ",
    });
  }
};

module.exports = { isAuth,isMember, isAdmin };
