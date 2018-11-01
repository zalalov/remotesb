let express = require('express');
let router = express.Router();
const PostsController = require('../controllers/posts');
const ChannelsController = require('../controllers/channels');

/**
 * Main page with posts
 */
router.get('/', async (req, res) => {
    let channelController = new ChannelsController();
    channelController
        .getAll()
        .then(
            (channels) => {
                return new Promise((resolve) => {
                    resolve(channelController.parseNames(channels));
                });
            },
            (err) => {
                console.error(err);
            }
        )
        .then(
            async (channels) => {
                let postsController = new PostsController();
                let feedGroupByChannel = await Promise.all(postsController.getFeed(channels));
                let feed = [];

                feedGroupByChannel.map((f) => {
                    feed = feed.concat(f);
                });

                console.log(feed.map((f) => f.content));

                res.render('index', {
                    messages: feed
                })
            }
        );
});

module.exports = router;