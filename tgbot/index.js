#!/usr/local/bin/node

const TelegramBot = require('node-telegram-bot-api');
let schedule = require('node-schedule');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

if (!token) {
    console.error('BOT_TOKEN environment variable isn\'t specified.');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

schedule.scheduleJob('*/5 * * * * *', async () => {
    await bot.sendMessage('@remoterstest', 'Money.');
});



// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
//
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
//
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
// });
//
// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });