const { QuoteService } = require("../services/index");

const quoteService = new QuoteService();

const getAllCategory = async (req, res) => {
  try {
    const response = await quoteService.getAllCategory();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all categories",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the Categories",
      err: error,
    });
  }
};
const getRandomQuote = async (req, res) => {
  try {
    const response = await quoteService.getRandomQuote();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the RandomQuote",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the Random Quote",
      err: error,
    });
  }
};
const getQuoteByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const response = await quoteService.getQuoteByCategory(category);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all the Quotes by category",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the Quotes by Category",
      err: error,
    });
  }
};

module.exports = {
  getAllCategory,
  getRandomQuote,
  getQuoteByCategory,
};
