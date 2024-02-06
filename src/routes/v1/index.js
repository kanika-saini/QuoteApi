const express = require("express");
const router = express.Router();
const Quotecontroller = require("../../controllers/Quote-controller");

router.get("/categories", Quotecontroller.getAllCategory);
//return a Random Quote
router.get("/quotes", Quotecontroller.getQuoteByCategory);
//return a Random Quote
router.get("/randomQuote", Quotecontroller.getRandomQuote);

module.exports = router;
