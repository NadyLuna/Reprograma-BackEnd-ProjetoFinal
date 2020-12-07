const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title:
      "Carteira de estudante Fácil! A forma mais segura para você adquirir seus direitos",
    date: "07/12/2020",
    version: "1.0.0",
  });
});

module.exports = router;