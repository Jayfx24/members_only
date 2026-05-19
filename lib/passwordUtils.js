const bcrypt = require("bcrypt");

async function genPwd(pwd) {
  return await bcrypt.hash(pwd, 10);
}

async function validPwd(pwd, userPwd) {
  return await bcrypt.compare(pwd, userPwd);
}

module.exports = {
  genPwd,
  validPwd,
};
