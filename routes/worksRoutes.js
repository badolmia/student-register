const express = require("express");
const router = express.Router();
const authVerifyMiddleware = require("./authVerifyMiddleware"); 


router.get("/", authVerifyMiddleware /* Get WorksModel data */);
router.post("/", authVerifyMiddleware /* Create new WorksModel data */);
router.put("/:id", authVerifyMiddleware /* Update WorksModel data */);
router.delete("/:id", authVerifyMiddleware /* Delete WorksModel data */);

module.exports = router;
