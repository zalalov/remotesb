let express = require('express');
let router = express.Router();

const PostsController = require('../controllers/posts');

/**
 * Get list of last post items (limited)
 */
router.get('/', (req, res) => {
    let postsController = new PostsController();
    let limit = req.args.limit || 10;

    postsController.get(limit)
        .then(
            (posts) => {
                res.status(200).json({
                    posts: posts
                });
            },
            (err) => {
                res.status(500).json({
                    posts: []
                });
            }
        );
});

/**
 * Get item by id
 */
router.get('/:id', (req, res) => {
    let postsController = new PostsController();

    postsController.getById(req.params.id)
        .then(
            (item) => {
                if (!item) {
                    res.status(404).json({});
                } else {
                    res.status(200).json({
                        job: item
                    });
                }
            },
            (err) => {
                res.status(500).json({});
            }
        );
});

module.exports = router;