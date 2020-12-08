const express = require("express");
const router = express.Router();
const controller = require("../controllers/faculdadesController");


router.post("/",controller.create)
router.get("/",controller.SelectAll)
router.put("/:id", controller.updateFaculdade)
router.delete("/:id",controller.deleteFaculdade)

module.exports = router;