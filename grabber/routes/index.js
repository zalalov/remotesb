let express = require('express');
let router = express.Router();
let axios = require('axios');
let Parser = require('rss-parser');

/* GET home page. */
router.get('/', async (req, res, next) => {
    // Get RSS
    let response = await axios.get('https://moikrug.ru/vacancies/rss?page=1&remote=1');

    // Parse RSS
    let parser = new Parser();
    let data = await parser.parseString(response.data);

    // Prepare parsed data and render PUG
    let jobs = [];

    if (data.items && !!data.items.length) {
        jobs = data.items.map((item) => {
            return item;
        });
    }

    res.render('jobs', {
        items: jobs
    });
});

module.exports = router;
