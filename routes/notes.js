var express = require('express');
var router = express.Router();

const notesCTRL = require("../controllers/notes")

/* GET users listing. */
// GET -> ALL /notes
router.get('/', notesCTRL.index);

// GET -> /notes/:id
router.get('/:id', notesCTRL.show);


module.exports = router;
