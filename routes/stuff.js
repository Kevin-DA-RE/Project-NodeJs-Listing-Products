const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

//router.get('/',auth, stuffCtrl.getAllThing);
router.get('/',stuffCtrl.getAllThing);
router.post('/',auth, multer, stuffCtrl.createThing);
router.get('/:id',auth, stuffCtrl.getOneThing);
router.put('/:id',auth, multer, stuffCtrl.modifyThing);
router.delete('/:id',auth, stuffCtrl.deleteThing);



module.exports = router;