// external imports
const express = require("express");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();
const { getLogin } = require("../controller/loginController");

//loginPage
router.get("/", decorateHtmlResponse("Log In"), getLogin);
module.exports = router;
