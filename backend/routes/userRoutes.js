const express = require('express');
const requireAuth = require("../middleware/requireAuth");
const { registerUser, getUsers } = require("../controllers/userController");
require('../controllers/userController');


const router = express.Router();
router.post('/register', registerUser);
router.get('/', requireAuth, getUsers);

module.exports = router;