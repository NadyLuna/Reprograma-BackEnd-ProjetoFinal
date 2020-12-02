const express = require("express");
const router = express.Router();
const controller = require("../controllers/faculdadesController");

router.get("/",controller.readAll);
router.post("/",controller.create)

module.exports = router;