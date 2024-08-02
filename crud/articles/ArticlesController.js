const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA DE artigo");
});

router.get("/admin/articles/new", (req, res) => {
    res.render("admin/articles/new");
});

module.exports = router;