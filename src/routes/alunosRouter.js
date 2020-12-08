const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunosController.js");

router.get("/",controller.selectAll);
router.post("/",controller.insertStudant);
router.get("/:cpf",controller.selectById);
router.put("/:cpf",controller.updateStudant);
router.patch("/:cpf",controller.updateStudant);
router.delete("/:cpf",controller.deleteStudant);


module.exports = router;
