let express = require('express');
let router = express.Router();

const JobsController = require('../controllers/jobs');

let jobsController = new JobsController();

router.get('/:id', (req, res) => {
    res.json(JobsController.get(req.params.id));
});

router.post('/', (req, res) => {
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