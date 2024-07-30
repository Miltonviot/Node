const express = require("express");
const router = express.Router();

router.get("/article", (req, res) => {
    res.send("ROTA DE artigo");
});

module.exports = router;