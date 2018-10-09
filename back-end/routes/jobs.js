let express = require('express');
let router = express.Router();

const JobsController = require('../controllers/jobs');

let jobsController = new JobsController();

router.post('/', (req, res) => {
    jobsController.create(req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch(() => {
            res.status(400).json({
                message: "Unable to save item."
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