"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Quotes",
      [
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only place where success comes before work is in the dictionary.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not how high you have climbed, but how you make a positive difference to the world.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not whether you get knocked down, it's whether you get up.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Get busy living, or get busy dying.",
          category: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Believe you can and you're halfway there.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only place where success comes before work is in the dictionary.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not about the cards you're dealt, but how you play the hand.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not how high you have climbed, but how you make a positive difference to the world.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "It always seems impossible until it’s done.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't stop when you're tired; stop when you're done.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your time is limited, don't waste it living someone else's life.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Perseverance is not a long race; it's many short races one after another.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When you come out of the storm, you won’t be the same person who walked in. That’s what the storm is all about.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not whether you get knocked down, it's whether you get up.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Perseverance is not the absence of adversity, but the ability to keep going despite it.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't stop when you're tired; stop when you're done.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not about the cards you're dealt, but how you play the hand.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Perseverance is not a long race; it's many short races one after another.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not how high you have climbed, but how you make a positive difference to the world.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only place where success comes before work is in the dictionary.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Perseverance is not a long race; it's many short races one after another.",
          category: "Persistence",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The journey of a thousand miles begins with one step.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "It is never too late to be what you might have been.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Strive not to be a success, but rather to be of value.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          category: "Inspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "It always seems impossible until it’s done.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your time is limited, don't waste it living someone else's life.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "If you are not willing to risk the usual, you will have to settle for the ordinary.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Do one thing every day that scares you.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not how high you have climbed, but how you make a positive difference to the world.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I find that the harder I work, the more luck I seem to have.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Achievement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Your attitude determines your direction.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your positivity can become a castle of hope for others.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A positive mind finds opportunity in everything, while a negative mind finds fault in everything.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking will let you do everything better than negative thinking will.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Every morning brings new potential, but only if you are willing to get out of bed and work for it.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking is more than just a tagline. It changes the way we behave. And I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your attitude, not your aptitude, will determine your altitude.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A positive mind finds opportunity in everything, while a negative mind finds fault in everything.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking is the key to success in business, education, pro football, anything that you can mention. I go out there thinking that I'm going to complete every pass.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Positive Thinking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Dream big and dare to fail.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Follow your dreams, they know the way.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you can dream it, you can do it.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Dreams don't work unless you do.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The biggest adventure you can take is to live the life of your dreams.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "It always seems impossible until it’s done.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Dreams are the touchstones of our characters.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You are never too old to set another goal or to dream a new dream.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Dream as if you'll live forever, live as if you'll die today.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "It takes courage to grow up and become who you really are.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Be strong, be fearless, be beautiful. And believe that anything is possible when you have the right people there to support you.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Courage is found in unlikely places.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You are never too old to set another goal or to dream a new dream.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It takes courage to love, but pain through love is the purifying fire which those who love generously know.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is not the strength of the body that counts, but the strength of the spirit.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Courage is grace under pressure.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To dare is to lose one's footing momentarily. To not dare is to lose oneself.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          category: "Courage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The only way to achieve the impossible is to believe it is possible.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only place where success comes before work is in the dictionary.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not whether you get knocked down, it's whether you get up.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Perseverance is not a long race; it's many short races one after another.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't stop when you're tired; stop when you're done.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Hard Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The function of leadership is to produce more leaders, not more followers.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A leader is one who knows the way, goes the way, and shows the way.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Leadership is not about being in charge. It's about taking care of those in your charge.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Leadership is not about being the best. It's about making everyone else better.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Great leaders are willing to sacrifice their own personal interests for the good of the team.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A good leader takes a little more than his share of the blame, a little less than his share of the credit.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A great leader's courage to fulfill his vision comes from passion, not position.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Great leaders are willing to sacrifice their own personal interests for the good of the team.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Great leaders are willing to sacrifice their own personal interests for the good of the team.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A good leader takes a little more than his share of the blame, a little less than his share of the credit.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A great leader's courage to fulfill his vision comes from passion, not position.",
          category: "Leadership",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The only person you are destined to become is the person you decide to be.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your time is limited, don't waste it living someone else's life.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You are never too old to set another goal or to dream a new dream.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your positivity can become a castle of hope for others.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A positive mind finds opportunity in everything, while a negative mind finds fault in everything.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking will let you do everything better than negative thinking will.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Self Improvement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Ambition is enthusiasm with a purpose.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your time is limited, don't waste it living someone else's life.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Ambition is the first step to success. The second step is action.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't watch the clock; do what it does. Keep going.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only place where success comes before work is in the dictionary.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success usually comes to those who are too busy to be looking for it.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A dream without ambition is like a car without gas... you're not going anywhere.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Ambition is the path to success. Persistence is the vehicle you arrive in.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your positive action combined with positive thinking results in success.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Ambition is the desire to do things right. Success is the doing of right things.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you want to achieve greatness stop asking for permission.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "It always seems impossible until it’s done.",
          category: "Ambition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Your attitude determines your direction.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your positivity can become a castle of hope for others.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A positive mind finds opportunity in everything, while a negative mind finds fault in everything.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking will let you do everything better than negative thinking will.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Every morning brings new potential, but only if you are willing to get out of bed and work for it.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking is more than just a tagline. It changes the way we behave. And I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your attitude, not your aptitude, will determine your altitude.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A positive mind finds opportunity in everything, while a negative mind finds fault in everything.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Positive thinking is the key to success in business, education, pro football, anything that you can mention. I go out there thinking that I'm going to complete every pass.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
          category: "Positivity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Your mindset determines your success.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not about the cards you're dealt, but how you play the hand.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is the key to unlocking your true potential.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit is your mind. Change your mindset, change your life.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not just about making the right decisions, but also about having the right mindset.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "You can't have a positive life with a negative mind.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your attitude determines your direction.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The mind is everything. What you think, you become.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The difference between a successful person and others is not lack of strength, not a lack of knowledge, but rather a lack in will.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is your biggest asset. Keep it positive.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Change your thoughts and you change your world.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A positive mindset creates a positive life.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your mindset is your filter for the world. Make sure it's a positive one.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not about waiting for the storm to pass, but learning to dance in the rain.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset determines your reality.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to fail. Be afraid not to try.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only true wisdom is in knowing you know nothing.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Wisdom begins in wonder.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The invariable mark of wisdom is to see the miraculous in the common.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A wise man learns more from his enemies than a fool from his friends.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The more I read, the more I acquire, the more certain I am that I know nothing.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is the companion of wisdom.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Knowing yourself is the beginning of all wisdom.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A wise person knows that there is something to be learned from everyone.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Turn your wounds into wisdom.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Wisdom is the ability to learn from change.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The journey of a thousand miles begins with one step.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only true wisdom is in knowing you know nothing.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is the companion of wisdom.",
          category: "Wisdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Creativity is intelligence having fun.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The secret to creativity is knowing how to hide your sources.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You can’t use up creativity. The more you use, the more you have.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity takes courage.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Imagination is everything. It is the preview of life's coming attractions.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To live a creative life, we must lose our fear of being wrong.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity is just connecting things.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Every artist was first an amateur.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity is the greatest rebellion in existence.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity is contagious, pass it on.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The creative adult is the child who survived.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In every work of genius, we recognize our once-rejected thoughts.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity is a wild mind and a disciplined eye.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Creativity is the way I share my soul with the world.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The most talented, thought-provoking, game-changing people are never normal.",
          category: "Creativity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Innovation distinguishes between a leader and a follower.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future belongs to those who innovate.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation is the specific instrument of entrepreneurship.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to discover the limits of the possible is to go beyond them into the impossible.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation is the ability to convert ideas into invoices.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is not the product of logical thought, even though the final product is tied to a logical structure.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation is the central issue in economic prosperity.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is the specific tool of entrepreneurs, the means by which they exploit change as an opportunity for a different business or service.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation is change that unlocks new value.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation distinguishes between a leader and a follower.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be afraid to take a big step if one is indicated. You can't cross a chasm in two small jumps.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Innovation is the calling card of the future.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is the ability to see change as an opportunity – not a threat.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is the creation of the new or the re-arranging of the old in a new way.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Innovation is taking two things that already exist and putting them together in a new way.",
          category: "Innovation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Gratitude turns what we have into enough.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When you are grateful, fear disappears and abundance appears.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Cultivate the habit of being grateful for every good thing that comes to you, and to give thanks continuously. And because all things have contributed to your advancement, you should include all things in your gratitude.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is not only the greatest of virtues, but the parent of all others.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is when memory is stored in the heart and not in the mind.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In daily life, we must see that it is not happiness that makes us grateful, but gratefulness that makes us happy.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude can transform common days into thanksgivings, turn routine jobs into joy, and change ordinary opportunities into blessings.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is the fairest blossom which springs from the soul.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Gratitude is the most exquisite form of courtesy.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Gratitude is the sign of noble souls.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When we give cheerfully and accept gratefully, everyone is blessed.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Gratitude is the memory of the heart.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is the antidote to the two things that stop us: fear and anger.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Gratitude is an opener of locked-up blessings.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is a powerful catalyst for happiness. It’s the spark that lights a fire of joy in your soul.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Gratitude is the most exquisite form of courtesy.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Gratitude is not only the greatest of virtues, but the parent of all others.",
          category: "Gratitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Empowerment is the key to unleashing your full potential.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The power you have is to be the best version of yourself.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Empowerment comes from within. Believe in yourself, and you will achieve greatness.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You have within you right now, everything you need to deal with whatever the world can throw at you.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't wait for someone else to empower you. Empower yourself.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Empowerment is not about giving you power. It's about reminding you that you already have it.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The most common way people give up their power is by thinking they don’t have any.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your power is not in what you control, but in what you can create and contribute.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Empowerment is about taking responsibility for your own life.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "No one can make you feel inferior without your consent.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "You are powerful, beautiful, brilliant, and brave.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your life does not get better by chance, it gets better by change.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "You have the power to shape your own destiny.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your time is now. Start where you are, use what you have, and do what you can.",
          category: "Empowerment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Kindness is a language that the deaf can hear and the blind can see.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "No act of kindness, no matter how small, is ever wasted.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Kindness is the sunshine in which virtue grows.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Be kind whenever possible. It is always possible.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A warm smile is the universal language of kindness.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Kindness is the key to unlocking the door of your heart.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The smallest act of kindness is worth more than the grandest intention.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Kind words can be short and easy to speak, but their echoes are truly endless.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your greatness is not what you have, it's what you give.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The world is full of kind people; if you can't find one, be one.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "One kind word can change someone's entire day.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Kindness is the only service that will stand the storm of life and not wash out.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Kindness is a gift everyone can afford to give.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Make kindness your superpower.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Kindness is the foundation of a meaningful life.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Kindness is the quality of being friendly, generous, and considerate.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "No act of kindness is too small. The gift of kindness may start as a small ripple that over time can turn into a tidal wave affecting the lives of many.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In a world where you can be anything, be kind.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Kindness is a universal language that transcends cultural and linguistic boundaries.",
          category: "Kindness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Opportunities don't happen. You create them.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Every problem is an opportunity in disguise.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't wait for extraordinary opportunities. Seize common occasions and make them great.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Opportunities are like sunrises. If you wait too long, you miss them.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Opportunities are usually disguised as hard work, so most people don't recognize them.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Success is where preparation and opportunity meet.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Opportunity does not knock, it presents itself when you beat down the door.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your big opportunity may be right where you are now.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Great minds seek opportunities, small minds seek security.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future depends on what you do today.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Opportunities are like stars; you may not always see them, but you know they're always there.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't just wait for the right opportunity, create it.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only thing worse than a missed opportunity is a never attempted one.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "An optimist sees an opportunity in every calamity; a pessimist sees a calamity in every opportunity.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Opportunity dances with those who are already on the dance floor.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
          category: "Opportunity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Change is the only constant in life.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Change your thoughts and you change your world.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Change the way you look at things, and the things you look at change.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "If you don't like something, change it. If you can't change it, change your attitude.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The secret of change is to focus all your energy not on fighting the old, but on building the new.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Change before you have to.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Change is hard at first, messy in the middle, and gorgeous at the end.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "People don't resist change. They resist being changed.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "If you want to fly, you have to give up the things that weigh you down.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your life does not get better by chance, it gets better by change.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Change is not something that we should fear. Rather, it is something that we should welcome. For without change, nothing in this world would ever grow or blossom, and no one in this world would ever move forward to become the person they're meant to be.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Change is the end result of all true learning.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When we are no longer able to change a situation, we are challenged to change ourselves.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "You must be the change you wish to see in the world.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Change is inevitable. Growth is optional.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The art of life is a constant readjustment to our surroundings.",
          category: "Change",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Have patience. All things are difficult before they become easy.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is bitter, but its fruit is sweet.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Rivers know this: There is no hurry. We shall get there someday.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Patience is not simply the ability to wait - it's how we behave while we're waiting.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Patience is the calm acceptance that things can happen in a different order than the one you have in mind.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The strongest of all warriors are these two: Time and Patience.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is the key to paradise.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is the companion of wisdom.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "With love and patience, nothing is impossible.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The two most powerful warriors are patience and time.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Tolerance and patience should not be read as signs of weakness, they are signs of strength.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Endurance is patience concentrated.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Patience can't be acquired overnight. It is just like building up a muscle. Every day you need to work on it.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "One moment of patience may ward off great disaster. One moment of impatience may ruin a whole life.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The secret of patience is doing something else in the meantime.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Patience is not passive. On the contrary, it is active. It is concentrated strength.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Patience is the art of concealing your impatience.",
          category: "Patience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine—and shadows will fall behind you.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your attitude, not your aptitude, will determine your altitude.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is the most important human trait because it allows us to evolve our ideas, to improve our situation, and to hope for a better tomorrow.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Believe you can and you're halfway there.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Optimism is the foundation of courage.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is the one quality more associated with success and happiness than any other.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is a strategy for making a better future. Because unless you believe that the future can be better, you are unlikely to step up and take responsibility for making it so.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Optimism is the most important human trait because it allows us to evolve our ideas, to improve our situation, and to hope for a better tomorrow.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Keep your face always toward the sunshine—and shadows will fall behind you.",
          category: "Optimism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Adversity is the diamond dust with which heaven polishes its jewels.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The darkest hour has only sixty minutes.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In times of great stress or adversity, it's always best to keep busy, to plow your anger and your energy into something positive.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Prosperity makes friends, adversity tries them.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Adversity introduces a man to himself.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Tough times never last, but tough people do.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Out of difficulties grow miracles.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The gem cannot be polished without friction, nor man perfected without trials.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In the middle of difficulty lies opportunity.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Adversity is the first path to truth.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adversity is like a strong wind. It tears away from us all but the things that cannot be torn, so that we see ourselves as we really are.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pressure of adversity does not affect the mind of the brave man. It is more powerful than external circumstances.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adversity has the effect of eliciting talents which, in prosperous circumstances, would have lain dormant.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only thing that overcomes hard luck is hard work.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greater the difficulty, the more glory in surmounting it.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adversity is the state in which man mostly easily becomes acquainted with himself, being especially free of admirers then.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The soul would have no rainbow if the eyes had no tears.",
          category: "Adversity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Happiness is not something ready made. It comes from your own actions.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Count your age by friends, not years. Count your life by smiles, not tears.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "True happiness is... to enjoy the present, without anxious dependence upon the future.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only thing that will make you happy is being happy with who you are.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Happiness is not having what you want, but wanting what you have.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is getting what you want. Happiness is wanting what you get.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Happiness is a warm puppy.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best way to cheer yourself up is to try to cheer somebody else up.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Happiness is a state of mind. It's just according to the way you look at things.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The happiest people don't have the best of everything, they just make the best of everything.",
          category: "Happiness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The present moment is the only moment available to us, and it is the door to all moments.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Mindfulness is a way of befriending ourselves and our experience.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Mindfulness is the key to unlocking the fullness of life.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The present moment is the only time over which we have dominion.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Mindfulness is the aware, balanced acceptance of the present experience.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The little things? The little moments? They aren't little.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When you realize nothing is lacking, the whole world belongs to you.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Mindfulness is simply being aware of what is happening right now without wishing it were different.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "As you walk and eat and travel, be where you are. Otherwise, you will miss most of your life.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Mindfulness isn't difficult, we just need to remember to do it.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your calm mind is the ultimate weapon against your challenges. So relax.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Do every act of your life as though it were the very last act of your life.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To live a pure unselfish life, one must count nothing as one's own in the midst of abundance.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Our own worst enemy cannot harm us as much as our unwise thoughts.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In the end, just three things matter: How well we have lived. How well we have loved. How well we have learned to let go.",
          category: "Mindfulness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "It's not that I'm so smart, it's just that I stay with problems longer.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The oak fought the wind and was broken, the willow bent when it must and survived.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Resilience is accepting your new reality, even if it's less good than the one you had before.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Our greatest glory is not in never falling, but in rising every time we fall.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's your reaction to adversity, not adversity itself that determines how your life's story will develop.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life doesn't get easier or more forgiving, we get stronger and more resilient.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Out of difficulties grow miracles.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The human capacity for burden is like bamboo – far more flexible than you'd ever believe at first glance.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Resilience is not what happens to you. It's how you react to, respond to, and recover from what happens to you.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I can be changed by what happens to me, but I refuse to be reduced by it.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "You are not your resume, you are your work.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The only way to do great work is to love what you do.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "What the caterpillar calls the end of the world, the master calls a butterfly.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Do not judge me by my success, judge me by how many times I fell down and got back up again.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says, 'I'll try again tomorrow.'",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "If you're going through hell, keep going.",
          category: "Resilience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Education is the most powerful weapon which you can use to change the world.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Learning never exhausts the mind.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Education is not the filling of a pail, but the lighting of a fire.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The beautiful thing about learning is that no one can take it away from you.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I am always doing that which I cannot do, in order that I may learn how to do it.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The more I live, the more I learn. The more I learn, the more I realize, the less I know.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is what we know already that often prevents us from learning.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The mind is not a vessel to be filled, but a fire to be kindled.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Education is not preparation for life; education is life itself.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Develop a passion for learning. If you do, you will never cease to grow.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Education is the kindling of a flame, not the filling of a vessel.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only person who is educated is the one who has learned how to learn and change.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The beautiful thing about learning is that no one can take it away from you.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Education is not the filling of a pail, but the lighting of a fire.",
          category: "Learning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is 10% what happens to us and 90% how we react to it.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is either a daring adventure or nothing at all.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "The best way to predict the future is to invent it.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future belongs to those who believe in the beauty of their dreams.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future depends on what you do today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future starts today, not tomorrow.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future belongs to those who prepare for it today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future is not something we enter. The future is something we create.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your future is created by what you do today, not tomorrow.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future depends on what you do today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future belongs to those who prepare for it today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future is not something we enter. The future is something we create.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your future is created by what you do today, not tomorrow.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future belongs to those who prepare for it today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The future is not something we enter. The future is something we create.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your future is created by what you do today, not tomorrow.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The future belongs to those who prepare for it today.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Futurism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "To love and be loved is to feel the sun from both sides.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest happiness you can have is knowing that you are loved for who you are and nothing more.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love is not just looking at each other, it's looking in the same direction.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love is an endless mystery, for it has nothing else to explain it.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love is the only force capable of transforming an enemy into a friend.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best thing to hold onto in life is each other.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A successful marriage requires falling in love many times, always with the same person.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest thing you'll ever learn is to love and be loved in return.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love isn't something you find. Love is something that finds you.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Love is the master key that opens the gates of happiness.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Love is not just a verb, it's you looking in the mirror.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Love is when you meet someone who tells you something new about yourself.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
          category: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A real friend is one who walks in when the rest of the world walks out.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is the only cement that will ever hold the world together.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A friend is someone who knows all about you and still loves you.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A real friend is one who walks in when the rest of the world walks out.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is the only cement that will ever hold the world together.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A friend is someone who knows all about you and still loves you.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true friend is someone who is always there for you, through the good times and the bad times.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A real friend is one who walks in when the rest of the world walks out.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is the only cement that will ever hold the world together.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A friend is someone who knows all about you and still loves you.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true friend is someone who is always there for you, through the good times and the bad times.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A real friend is one who walks in when the rest of the world walks out.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is the only cement that will ever hold the world together.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A friend is someone who knows all about you and still loves you.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "A true friend is someone who is always there for you, through the good times and the bad times.",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
          category: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I used to play piano by ear, but now I use my hands.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "I told my wife she should embrace her mistakes. She gave me a hug.",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Why don't scientists trust atoms? Because they make up everything!",
          category: "Humor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Balance is not something you find, it's something you create.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In all aspects of life, balance is key.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is the key to everything. What we do, think, say, eat, feel, they all require awareness, and through awareness, we can grow.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is a balance between rest and movement.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not better time management, but better boundary management.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not something you find, it's something you create.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In all aspects of life, balance is key.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is the key to everything. What we do, think, say, eat, feel, they all require awareness, and through awareness, we can grow.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is a balance between rest and movement.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not better time management, but better boundary management.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not something you find, it's something you create.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In all aspects of life, balance is key.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is the key to everything. What we do, think, say, eat, feel, they all require awareness, and through awareness, we can grow.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is a balance between rest and movement.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not better time management, but better boundary management.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not something you find, it's something you create.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "In all aspects of life, balance is key.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is the key to everything. What we do, think, say, eat, feel, they all require awareness, and through awareness, we can grow.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Life is a balance between rest and movement.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Balance is not better time management, but better boundary management.",
          category: "Balance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Family is not an important thing. It's everything.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family means no one gets left behind or forgotten.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is where life begins and love never ends.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The love of a family is life's greatest blessing.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is not an important thing. It's everything.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family means no one gets left behind or forgotten.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is where life begins and love never ends.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The love of a family is life's greatest blessing.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A happy family is but an earlier heaven.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is not an important thing. It's everything.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family means no one gets left behind or forgotten.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is where life begins and love never ends.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The love of a family is life's greatest blessing.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A happy family is but an earlier heaven.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is not an important thing. It's everything.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family means no one gets left behind or forgotten.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is where life begins and love never ends.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The love of a family is life's greatest blessing.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A happy family is but an earlier heaven.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Family is not an important thing. It's everything.",
          category: "Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The purpose of our lives is to be happy.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
          category: "Purpose",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Compassion is the radicalism of our time.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The purpose of human life is to serve, and to show compassion and the will to help others.",
          category: "Compassion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The thirst for knowledge is like a piece of ass that's never satisfied.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Curiosity is the wick in the candle of learning.",
          category: "Curiosity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Your mindset determines your success.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A positive mindset brings positive results.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is everything. What you think, you become.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Success starts with a positive mindset.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset determines your success.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A positive mindset brings positive results.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is everything. What you think, you become.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Success starts with a positive mindset.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset determines your success.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A positive mindset brings positive results.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is everything. What you think, you become.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Success starts with a positive mindset.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset determines your success.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "A positive mindset brings positive results.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset is everything. What you think, you become.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Success starts with a positive mindset.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Your mindset determines your success.",
          category: "mindset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the keynote of all true elegance.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the glory of expression.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the keynote of all true elegance.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the glory of expression.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate form of sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the keynote of all true elegance.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the glory of expression.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate form of sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the keynote of all true elegance.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is really simple, but we insist on making it complicated.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the glory of expression.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate form of sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "simplicity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adaptability is about the powerful difference between adapting to cope and adapting to win.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is about not knowing, having to change, taking the moment and making the best of it without knowing what's going to happen next.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adaptability is about the powerful difference between adapting to cope and adapting to win.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is about not knowing, having to change, taking the moment and making the best of it without knowing what's going to happen next.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Adaptability is the key to survival.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adaptability is about the powerful difference between adapting to cope and adapting to win.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is about not knowing, having to change, taking the moment and making the best of it without knowing what's going to happen next.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Adaptability is the key to survival.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Adaptability is about the powerful difference between adapting to cope and adapting to win.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Life is about not knowing, having to change, taking the moment and making the best of it without knowing what's going to happen next.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Adaptability is the key to survival.",
          category: "Adaptation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "The only real mistake is the one from which we learn nothing.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not what happens to you, but how you react to it that matters.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only real mistake is the one from which we learn nothing.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not what happens to you, but how you react to it that matters.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In the process of letting go, you will lose many things from the past, but you will find yourself.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only real mistake is the one from which we learn nothing.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not what happens to you, but how you react to it that matters.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In the process of letting go, you will lose many things from the past, but you will find yourself.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only real mistake is the one from which we learn nothing.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Self-reflection is a humbling process. It's essential to find out why you think, say, and do certain things.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It's not what happens to you, but how you react to it that matters.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "In the process of letting go, you will lose many things from the past, but you will find yourself.",
          category: "Reflection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote:
            "True humility is not thinking less of yourself; it is thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Humility is not thinking less of yourself, but thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Humility is the foundation of all virtues.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "True humility is not thinking less of yourself; it is thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Humility is not thinking less of yourself, but thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Humility is the foundation of all virtues.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest friend of truth is time, her greatest enemy is prejudice, and her constant companion is humility.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "True humility is not thinking less of yourself; it is thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Humility is not thinking less of yourself, but thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Humility is the foundation of all virtues.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest friend of truth is time, her greatest enemy is prejudice, and her constant companion is humility.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "True humility is not thinking less of yourself; it is thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Humility is not thinking less of yourself, but thinking of yourself less.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Humility is the foundation of all virtues.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The greatest friend of truth is time, her greatest enemy is prejudice, and her constant companion is humility.",
          category: "Humility",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          quote: "The best way to predict the future is to create it.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The best way to predict the future is to create it.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Don't be afraid to give up the good to go for the great.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The only limit to our realization of tomorrow will be our doubts of today.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Opportunities don't happen. You create them.",
          category: "Entrepreneurship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Design is not just what it looks like and feels like. Design is how it works.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Good design is obvious. Great design is transparent.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Design is thinking made visual.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Design is not just what it looks like and feels like. Design is how it works.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Good design is obvious. Great design is transparent.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Design is thinking made visual.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The details are not the details. They make the design.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Design is not just what it looks like and feels like. Design is how it works.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Good design is obvious. Great design is transparent.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Design is thinking made visual.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The details are not the details. They make the design.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Design is not just what it looks like and feels like. Design is how it works.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Good design is obvious. Great design is transparent.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Design is thinking made visual.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "The details are not the details. They make the design.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Simplicity is the ultimate sophistication.",
          category: "Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Quotes", null, {});
  },
};
