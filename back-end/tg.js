const TelegramClient = require('./fetchers/telegram');

let tgClient = new TelegramClient();
tgClient.connect();
tgClient.login();

module.exports = tgClient;