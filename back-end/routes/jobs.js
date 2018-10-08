let express = require('express');
let router = express.Router();

const JobsController = require('../controllers/jobs');

let jobsController = new JobsController();

router.post('/', (req, res) => {
    jobsController.create(req.body);

    res.json({
        status: 200
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