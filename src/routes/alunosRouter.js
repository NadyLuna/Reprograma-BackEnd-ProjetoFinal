const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunosController.js");

router.get("/",controller.selectAll);
router.post("/",controller.insertStudant);
router.get("/:cpf",controller.selectAlunoById);
router.put("/:cpf",controller.updateStudantById);
router.patch("/:cpf",controller.updateStudantById);
router.delete("/:cpf",controller.deleteStudant);


module.exports = router;
