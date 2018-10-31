const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let channelSchema = new Schema({
    name: {type: String, required: true}
});

channelSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Job item already exists.'));
    } else {
        console.log(`Job item saving post error handling: ${error}`);

        next(new Error('Unknown error.'));
    }
});

let Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
