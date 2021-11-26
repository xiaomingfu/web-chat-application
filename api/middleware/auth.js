const jwt = require("jsonwebtoken");
const config = require("../config/app");

exports.auth = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }

  jwt.verify(token, config.appKey, (err, user) => {
    if (err) {
      return res.status(401).json({ error });
    }
    req.user = user;
    console.log(user);
  });
  next();
};
