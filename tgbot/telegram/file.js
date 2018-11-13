const axios = require('axios');

class File {
    constructor(file_id) {
        this.file_id = file_id;
        this.bot_token = process.env.TELEGRAM_BOT_TOKEN;

        if (!this.bot_token) {
            return new Error('TELEGRAM_BOT_TOKEN environment variable has to be specified.');
        }
    }

    buildUrl(type, data) {
        switch (type) {
            case 'path':
                if (!data.hasOwnProperty('file_id')) {
                    return new Error('file_id argument has to be specified');
                }

                return `https://api.telegram.org/bot${this.bot_token}/getFile?file_id=${data['file_id']}`;

            case 'file':
                if (!data.hasOwnProperty('file_path')) {
                    return new Error('file_path argument has to be specified')
                }

                return `https://api.telegram.org/file/bot${this.bot_token}/${data['file_path']}`;

            default:
                return new Error('Unknown URL type.')
        }
    }

    parsePath(response) {
        if (response.hasOwnProperty('data') &&
            response.data.hasOwnProperty('result') &&
            response.data.result.hasOwnProperty('file_path')
        ) {
            return response.data.result.file_path;
        }

        return null;
    }

    getPath() {
        return axios.get(this.buildUrl('path', {file_id: this.file_id}));
    }

    requestFile(url) {
        return axios.get(url);
    }

    getFile() {
        return this.getPath()
            .then(this.parsePath)
            .then(path => this.buildUrl('file', {file_path: path}))
            .then(this.requestFile);
    }
}

// module.exports = File;
module.exports = File;