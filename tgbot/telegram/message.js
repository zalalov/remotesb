class Message {
    constructor(message) {
        this.message = message;
    }

    postToChannel(channelName, botInstance) {}

    getMaxSizePhotoFileId() {
        if (!this.message.photo) {
            return null;
        }

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
}

module.exports = Message;