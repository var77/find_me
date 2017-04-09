const express = require('express');
const router = express.Router();
const FB = require('../core/fb');
/* GET home page. */
router.get('/', function(req, res) {
    FB(req.query.number)
        .then(info => res.json(info))
});

module.exports = router;
