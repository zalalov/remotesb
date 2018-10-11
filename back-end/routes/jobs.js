let express = require('express');
let router = express.Router();

const JobsController = require('../controllers/jobs');

/**
 * Get list of job items
 */
router.get('/', (req, res) => {
    let jobsController = new JobsController();

    jobsController.get()
        .then(
            (jobs) => {
                res.status(200).json({
                    jobs: jobs
                });
            },
            (err) => {
                res.status(500).json({
                    jobs: []
                })
            }
        );
});

/**
 * Get item by id
 */
router.get('/:id', (req, res) => {
    let jobsController = new JobsController();

    jobsController.getById(req.params.id)
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

/**
 * Create job item
 */
router.post('/', (req, res) => {
    let jobsController = new JobsController();

    jobsController.create(req.body)
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

/**
 * Update job item
 */
router.put('/:id', (req, res) => {
    res.json({
        status: 200
    })
});

/**
 * Delete job item
 */
router.delete('/:id', (req, res) => {
    res.json({
        status: 200
    });
});

module.exports = router;