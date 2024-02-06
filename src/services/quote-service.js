const { QuoteRepository } = require("../repository/index");

class QuoteService {
  constructor() {
    this.quoteRepository = new QuoteRepository();
  }
  async getAllCategory() {
    const allCategory = await this.quoteRepository.getAllCategory();
    console.log(allCategory);
    return allCategory;
  }
  async getRandomQuote() {
    const randomQuote = await this.quoteRepository.getRandomQuote();
    console.log(randomQuote);
    return randomQuote;
  }
  async getQuoteByCategory(category) {
    const quoteByCategory = await this.quoteRepository.getQuoteByCategory(
      category
    );
    console.log(quoteByCategory);
    return quoteByCategory;
  }
}
module.exports = QuoteService;
