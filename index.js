const TelegramBot = require('node-telegram-bot-api');

const token = '7867171176:AAGxTX9V3F25vyN1g9Ue5cM7GmlAp5VzdJQ';
const webAppUrl = 'https://elaborate-maamoul-89293c.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
    await bot.sendMessage(chatId, 'Заполните форму', {
      reply_markup: {
        keyboard: [
          [{text: 'Заполнить форму', web_app: {url: webAppUrl}}]
        ]
      }
    })

    await bot.sendMessage(chatId, 'Перейти в магазин', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Received your message');
});