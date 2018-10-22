class PostsController {
    constructor(client) {
        this._client = client;
    }

    fetch(limit) {
        return new Promise((resolve, reject) => {

        });
    }

    get(limit = 10) {
        return Job.find().sort({"created_at": -1}).limit(10).exec();
    }

    getById(id) {
        return Job.findById(id).exec();
    }

    update(id, fields) {}

    delete(id) {}
}

module.exports = PostsController;