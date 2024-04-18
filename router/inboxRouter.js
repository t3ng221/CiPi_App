const express = require("express");
const router = express.Router();
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

//loginPage
router.get("/", decorateHtmlResponse("Inbox"), getInbox);
module.exports = router;
