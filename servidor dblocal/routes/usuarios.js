const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');

const router = routerx();

router.post('/add', usuarioController.add);
router.put('/modify/:id', usuarioController.modify);
router.get('/list', usuarioController.list);
router.get('/query/:id', usuarioController.query);
router.put('/deactivate/:id', usuarioController.deactivate);
router.put('/activate/:id', usuarioController.activate);
router.post('/login', usuarioController.login);
router.post('/register', usuarioController.register);
// router.delete('/remove', usuarioController.remove);


module.exports = router;