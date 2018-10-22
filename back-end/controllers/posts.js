class PostsController {
    constructor(client) {
        this._client = client;
    }

    fetch(limit) {
        return [];
    }

    getById(id) {
        return {};
    }
}

module.exports = PostsController;