const express = require("express");
const router = express.Router();
const Quotecontroller = require("../../controllers/Quote-controller");

router.get("/", (req, res) => {
  // Check if the "category" query parameter is present
  if (req.query.category) {
    // If "category" query parameter is present, call getQuoteByCategory method
    Quotecontroller.getQuoteByCategory(req, res);
  } else {
    // If no query parameter is present, call getAllCategory method
    Quotecontroller.getAllCategory(req, res);
  }
});
//return a Random Quote
router.get("/random", Quotecontroller.getRandomQuote);

module.exports = router;
