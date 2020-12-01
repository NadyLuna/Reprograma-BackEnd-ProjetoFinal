const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunosController.js");

router.get("/",controller.readAll);
router.post("/",controller.create)

module.exports = router;
