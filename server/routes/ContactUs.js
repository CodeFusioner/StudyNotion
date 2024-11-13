const express = require("express")
const router = express.Router()
const {contactUs}=require("../controllers/ContactUs");

// Contact Us routes
router.post("/contactUs", contactUs);

module.exports = router;

