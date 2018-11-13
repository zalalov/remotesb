const TelegramFile = require('./file');

class Message {
    constructor(message) {
        this.message = message;
    }

    postToChannel(channelName, botInstance) {}

    getMaxSizePhotoFileId() {
        let maxSizePhoto = {
            file_size: -1
        };

        this.message.photo.map(photo => {
            if (maxSizePhoto.file_size < photo.file_size) {
                maxSizePhoto = photo;
            }
        });

        if (maxSizePhoto.file_size < 0) {
            return null;
        }

        return maxSizePhoto.file_id;
    }

    async parsePhoto() {
        if (!this.message.photo) {
            return null;
        }

        let file_id = this.getMaxSizePhotoFileId();

        if (file_id) {
            let telegramFile = new TelegramFile(file_id);
            let file = await telegramFile.getFile();
        }
    }
}

module.exports = Message;