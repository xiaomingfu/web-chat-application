const bcrypt = require("bcrypt");
const config = require("../config/app");
const jwt = require("jsonwebtoken");
const User = require("../models").User;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const secret = require("crypto").randomBytes(64).toString("hex");
    //   find the user
    const user = await User.findOne({ where: { email } });

    // check if user found
    if (!user) return res.status(404).json({ message: "User not found" });

    // check if password is matched
    if (!bcrypt.compareSync(password, user.password))
      return res.status(404).json({ message: "Incorrect password!" });

    // generate auth token
    const userWithToken = generateToken(user.get({ raw: true }));
    userWithToken.avatar = user.avatar;
    return res.send(userWithToken);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const userWithToken = generateToken(user.get({ raw: true }));
    return res.send(userWithToken);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const generateToken = (user) => {
  delete user.password;
  const token = jwt.sign(user, config.appKey, { expiresIn: 86400 });
  return { ...user, ...{ token } };
};
