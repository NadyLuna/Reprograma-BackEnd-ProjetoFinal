const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunosController.js");

router.get("/",controller.readAll);

module.exports = router;
