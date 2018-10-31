let express = require('express');
let router = express.Router();

const ChannelsController = require('../controllers/channels');

/**
 * Get list of last telegram channels
 */
router.get('/', (req, res) => {
    let channelController = new ChannelsController();

    channelController.getAll()
        .then(
            (channels) => {
                res.status(200).json({
                    channels: channels
                });
            },
            (err) => {
                res.status(500).json({
                    channels: []
                })
            }
        );
});

/**
 * Create channel item
 */
router.post('/', (req, res) => {
    let channelsController = new ChannelsController();

    channelsController.create(req.body)
        .then(
            () => {
                res.status(200).json();
            },
            (err) => {
                res.status(400).json({
                    message: err.message,
                });
            }
        );

});

module.exports = router;