let Channel = require('../models/channel');

class ChannelsController {
    create(channelItem) {
        return new Promise((resolve, reject) => {
            let channel = new Channel(
                {
                    name: channelItem.name
                }
            );

            channel.save((err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve();
                }
            });
        });
    }

    getAll() {
        return Channel.find().exec();
    }

    parseNames(items) {
        return items.map((item) => item.name);
    }
}

module.exports = ChannelsController;