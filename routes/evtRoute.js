const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/evtControl.js');

router.get('/', controller.index);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
