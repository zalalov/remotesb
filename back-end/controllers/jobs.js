let Job = require('../models/job');

class JobsController {
    create(jobItem) {
        return new Promise((resolve, reject) => {
            let job = new Job(
                {
                    title: jobItem.title,
                    description: jobItem.description,
                    company: jobItem.company,
                    created_at: jobItem.created_at,

                    service_id: jobItem.service_id,
                    service_item_id: jobItem.service_item_id,
                    service_published_at: jobItem.service_published_at,
                    service_link: jobItem.service_link
                }
            );

            job.save((err) => {
                if (err) {
                    reject(Error('Unable to save job item.'))
                } else {
                    resolve();
                }
            });
        });
    }

    list(limit = 10) {}

    update(id, fields) {}

    delete(id) {}
}

module.exports = JobsController;