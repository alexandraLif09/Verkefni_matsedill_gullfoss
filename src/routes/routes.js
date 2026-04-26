const express = require("express");
const path = require("path");
const matsedill = require("../data/matsedill.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("matsedill", {
        title: "Matseðill FB",
        days: matsedill
    });
});

router.get("/gullfoss", (req, res) => {
    res.render("gullfoss", { title: "Upplýsingar um Gullfoss" });
});

module.exports = router;