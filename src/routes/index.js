const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title:" Projeto Final turma on7 Back-End - {Reprograma} by M.I.N.As",
    project: "Carteira de estudante Fácil!",
    version: "1.0.0",

  });
});

module.exports = router;