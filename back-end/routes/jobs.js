let express = require('express');
let router = express.Router();

const JobsController = require('../controllers/jobs');

let jobsController = new JobsController();

router.post('/', (req, res) => {
    jobsController.create(req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            });
        });

});

router.put('/:id', (req, res) => {
    res.json({
        status: 200
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        status: 200
    });
});

module.exports = router;