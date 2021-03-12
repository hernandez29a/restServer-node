const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/users');

const router = Router();

// Rutas de usuarios

//cargar usuarios
router.get('/', usuariosGet);

//Crear usuarios
router.post('/', usuariosPost );

//Actualizar usuarios
router.put('/:id', usuariosPut );

//Borrar usuarios
router.delete('/', usuariosDelete);




module.exports = router;