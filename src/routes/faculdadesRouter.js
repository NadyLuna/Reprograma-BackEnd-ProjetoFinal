const express = require("express");
const router = express.Router();
const controller = require("../controllers/faculdadesController");


router.post("/",controller.createFaculdade)
router.get("/",controller.selectAllFaculdades)
router.get("/:id",controller.selectById)
router.put("/:id", controller.updateFaculdadeById)
router.delete("/:id",controller.deleteFaculdadeById)

module.exports = router;