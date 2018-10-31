let tgClient = require('../tg');

class PostsController {
    getFeed(channels) {
        return channels.map((channel) => {
            return tgClient.getMessagesByChatName(channel);
        });
    }
}

module.exports = PostsController;