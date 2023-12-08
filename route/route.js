const express = require("express");

const router = express.Router();

const { uploadImage, getall } = require("../controller/fileupload");


router.post("/miniuploadImage", uploadImage);
router.get("/allproperties", getall);

module.exports = router;
