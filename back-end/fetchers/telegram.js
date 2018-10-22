const {Client} = require('tdl');

class TelegramClient {
    constructor(apiId = process.env.TELEGRAM_API_ID, apiHash = process.env.TELEGRAM_API_HASH) {
        this.client = new Client({
            apiId: apiId,
            apiHash: apiHash
        });
    }

    async connect() {
        await this.client.connect();
    }

    async login(phone = process.env.TELEGRAM_PHONE_NUMBER) {
        await this.client.login(() => ({
            phoneNumber: phone
        }));
    }

    async searchChatByName(username) {
        return this.client.invoke({
            _: 'searchPublicChat',
            username: username
        });
    }

    async getMessageByChatId(id, limit = 10) {
        return this.client.invoke({
            _: 'getChatHistory',
            chat_id: id,
            limit: limit
        });
    }

    async getMessagesByChatName(name, limit = 10) {
        let apiCalls = [];
        let chat = await this.searchChatByName(name);
        let messages = [];
        let tries = 0;

        while (messages.length !== limit && tries !== 5) {
            messages = await this.getMessageByChatId(chat.id, limit)
                .then(
                    response => response.messages,
                    (err) => {
                        console.log(err);
                    });

            tries++;
        }

        return messages;
    }
}

module.exports = TelegramClient;