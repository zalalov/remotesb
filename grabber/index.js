#!/usr/local/bin/node

const TelegramClient = require('./app/fetchers/telegram');

async function main() {
    let tgClient = new TelegramClient();
    await tgClient.connect();
    await tgClient.login();
    const messages = await tgClient.getMessagesByChatName('@bitkogan');

    console.log(messages.map((m) => {
        return m.messages[0].content.text.text.slice(0, 10);
    }));

    // const chats = await client.invoke({
    //     _: 'getChats',
    //     offset_order: '9223372036854775807',
    //     offset_chat_id: 0,
    //     limit: 1
    // });

    // console.log(chats.chat_ids);
    //
    // let chatsInfo = chats.chat_ids.map(async id => {
    //     const chatInfo = await client.invoke({
    //         _: 'getChat',
    //         chat_id: id
    //     });
    //
    //     console.log(chatInfo);
    //
    //     return chatInfo;
    // });

    // const result = await client.invoke({
    //     _: 'getChats',
    //     offset_order: '9223372036854775807',
    //     offset_chat_id: 0,
    //     limit: 100
    // });

    // const chatId = result.chat_ids[0];

    // const history = await tgClient.client.invoke({
    //     _: 'getChatHistory',
    //     chat_id: -1001199979298,
    //     from_message_id : 0,
    //     // offset_chat_id: 0,
    //     limit: 10,
    //     only_local: false
    // });
    //
    // console.log(history.messages.length);

}

main();


// let fetchers = [
//     new MoiKrugFetcher(),
//     // new HHFetcher()
// ];
//
// schedule.scheduleJob("*/5 * * * * *", async () => {
//     console.log('5 seconds event was started.');
//
//     let jobsPromises = fetchers.map(async (fetcher) => {
//         return await fetcher.fetch();
//     });
//
//     let jobs = await Promise.all(jobsPromises).then(values => {
//         return values;
//     });
//
//     console.log(jobs);
// });

