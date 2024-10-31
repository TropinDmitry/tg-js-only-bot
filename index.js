const TelegramBot = require('node-telegram-bot-api');

const token = '7747217090:AAGrLncvc0J_cDh3Z2RHZl8LrPQ7terbUMo';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});