let express = require('express');
let router = express.Router();
let tgClient = require('../tg');
const ChannelsController = require('../controllers/channels');
const PostsController = require('../controllers/posts');

/**
 * Get list of last post items (limited)
 */
router.get('/', (req, res) => {
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
                let feed = await Promise.all(postsController.getFeed(channels));

                res.status(200).json({
                    feed: feed
                });
            }
        );
});

module.exports = router;