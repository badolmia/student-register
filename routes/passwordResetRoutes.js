const express = require("express");
const router = express.Router();


router.post("/request-reset" /* Request password reset email */);
router.post("/reset/:token" /* Reset password */);

module.exports = router;
