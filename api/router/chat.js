const router = require("express").Router();
const { index } = require("../controllers/chatController");
const { validate } = require("../validators");
const { auth } = require("../middleware/auth");

router.get("/", index);

module.exports = router;
