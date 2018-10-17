const {Client} = require('tdl');

class TelegramClient {
    constructor(apiId=process.env.TELEGRAM_API_ID, apiHash=process.env.TELEGRAM_API_HASH) {
        this.client = new Client({
            apiId: apiId,
            apiHash: apiHash
        });
    }

    async connect() {
        await this.client.connect();
    }

    async login(phone=process.env.TELEGRAM_PHONE_NUMBER) {
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

    async getMessageByChatId(id, offset=0) {
        return this.client.invoke({
            _: 'getChatHistory',
            chat_id: id,
            from_message_id: 0,
            limit: 10
        });
    }

    async getMessagesByChatName(name, limit=10) {
        let apiCalls = [];
        let chat = await this.searchChatByName(name);

        console.log(await this.getMessageByChatId(chat.id).then((d) => {console.log(d)}, (err) => {console.log(err);}));


        // if (chat.id) {
        //     for (let i = 0; i < limit; i++) {
        //         apiCalls.push(this.getMessageByChatId(chat.id, i).then((d) => {console.log(d);}, (err) => {console.log(err);}));
        //     }
        //
        //     return await Promise.all(apiCalls);
        // }

        return [];
    }
}

module.exports = TelegramClient;