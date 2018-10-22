let express = require('express');
let router = express.Router();

const PostsController = require('../controllers/posts');

/**
 * Get list of last post items (limited)
 */
router.get('/', (req, res) => {
    res.status(200).json({
        posts: []
    });
});

module.exports = router;