const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let jobSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    company: {type: String, required: true},
    created_at: Date,
    updated_at: Date,
    posted_at: Date,

    service_id: {type: Number, required: true},
    service_item_id: {type: Number, required: true},
    service_published_at: {type: Date, required: true},
    service_link: {type: String, required: true},
});

let Job = mongoose.model('Job', jobSchema);

module.exports = Job;
