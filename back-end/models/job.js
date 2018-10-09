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

jobSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Job item already exists.'));
    } else {

        console.log(`Job item saving post error handling: ${error}`);

        next(new Error('Unknown error.'));
    }
});

let Job = mongoose.model('Job', jobSchema);

module.exports = Job;
