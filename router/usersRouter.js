const express = require("express");
const router = express.Router();
const { addUserValidators } = require("../middleware/users/userValidators");
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");

//users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add  user
router.post("/", avatarUpload, addUserValidators);

module.exports = router;
