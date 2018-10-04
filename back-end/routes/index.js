let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    res.json({'status': 200})
});

module.exports = router;
