const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/user');

const router = Router();

router.get('/', usuariosGet );
  
router.put('/:id', usuariosPut);
  
router.post('/', [
    check('correo', 'el correo no es valido').isEmail(),
    check('pass', 'El password es obligatorio y tiene que tenes mas de 6 letras').isLength( {min:6}),
    ch
],usuariosPost);
  
router.delete('/', usuariosDelete);
  
router.patch('/', usuariosPatch);




module.exports = router;