#!/usr/local/bin/node

const TelegramBot = require('node-telegram-bot-api');
let schedule = require('node-schedule');
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('TELEGRAM_BOT_TOKEN environment variable isn\'t specified.');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

schedule.scheduleJob('*/5 * * * * *', async () => {
    await bot.sendMessage('@remoterstest', (new Date).toTimeString());
});