const axios = require('axios');

class File {
    constructor(file_id) {
        this.file_id = file_id;
        this.bot_token = process.env.TELEGRAM_BOT_TOKEN;

        if (!this.bot_token) {
            return new Error('TELEGRAM_BOT_TOKEN environment variable has to be specified.');
        }
    }

    buildUrl(type, ...args) {
        switch (type) {
            case 'path':
                if (!args.hasOwnProperty('file_id')) {
                    return new Error('file_id argument has to be specified')
                }

                return `https://api.telegram.org/bot${this.bot_token}/getFile?file_id=${args['file_id']}`;

            case 'file':
                if (!args.hasOwnProperty('file_path')) {
                    return new Error('file_path argument has to be specified')
                }

                return `https://api.telegram.org/file/bot${this.bot_token}/${args['file_path']}`;

            default:
                return new Error('Unknown URL type.')
        }
    }

    parsePath() {}

    getPath(file_id) {
        return new Promise((resolve, reject) => {
            axios.get(this.buildUrl('path', {file_id: file_id}))
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
}

module.exports = File;