let Job = require("../models/job");

class JobsController {
    create(jobItem) {
        let product = new Job(
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

        product.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Product Created successfully")
            }
        })
    }

    list(limit = 10) {
        return [
            {
                id: 1,
                title: "title"
            },
            {
                id: 2,
                title: "title"
            }
        ];
    }

    update(id, fields) {}

    delete(id) {}
}

module.exports = JobsController;