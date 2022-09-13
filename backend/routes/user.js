const router = require('express').Router();
const { getUserById, postNewUser } = require('../controllers/user');

router.get('/:userId', getUserById);
router.post('/new', postNewUser);

module.exports = router;
