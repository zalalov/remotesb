class JobsController {
    static get(id) {
        return {
            id: 1,
            title: 'title'
        };
    }

    create(jobItem) {}

    list(limit = 10) {
        return [
            {
                id: 1,
                title: 'title'
            },
            {
                id: 2,
                title: 'title'
            }
        ];
    }

    update(id, fields) {}

    delete(id) {}
}

module.exports = JobsController;