const { Quote } = require("../models/index");
const { Sequelize } = require("sequelize");
class QuoteRepository {
  async getAllCategory() {
    const allCategory = await Quote.findAll({
      attributes: ["category"],
      group: ["category"],
    });
    console.log(allCategory);
    return allCategory;
  }

  async getRandomQuote() {
    const randomQuote = await Quote.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1,
    });
    console.log(randomQuote);
    return randomQuote;
  }
  async getQuoteByCategory(category) {
    const quoteByCategory = await Quote.findAll({
      where: {
        category: category,
      },
    });
    console.log(quoteByCategory);
    return quoteByCategory;
  }
}
module.exports = QuoteRepository;
