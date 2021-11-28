const { Router } = require('express');
const router = Router();
const { crearUsuario, getUsers } = require('../controllers/user.controller');

router.route('/').get(getUsers).post(crearUsuario);

module.exports = router;
