#!/usr/local/bin/node

const TelegramBot = require('node-telegram-bot-api');

const TelegramMessage = require('./telegram/message');
const TelegramFile = require('./telegram/file');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('TELEGRAM_BOT_TOKEN environment variable isn\'t specified.');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', async (msg) => {
    let message = new TelegramMessage(msg);
    let file_id = message.getMaxSizePhotoFileId();

    if (file_id) {
        let file = new TelegramFile(file_id);
        console.log(await file.getFile());
    }

    bot.sendMessage(chatId, 'Received your message');
});