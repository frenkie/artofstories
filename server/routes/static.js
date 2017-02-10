var express = require('express');
var router = express.Router();

router.use('/', express.static( __dirname +'/../../app' ));
router.use('/audio', express.static( __dirname +'/../../audio' ));
router.use('/vendor', express.static( __dirname +'/../../node_modules' ));

module.exports = router;