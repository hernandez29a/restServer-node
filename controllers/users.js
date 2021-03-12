const { response } = require('express');


const usuariosGet = (req, res = response) => {

    // obtener lo que viene en la query (ruta)
    const {nombre = 'no hay nombre', apikey, termino, page = 1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        nombre,
        apikey,
        termino,
        page,
        limit
    });
}


// Crear un usuario
const usuariosPost = (req, res = response) => {

    //capturar lo que envia la vista o el usuario
    const {nombre, edad} = req.body;


    res.json({
        ok: true,
        msg: 'post API - controlador de crear ',
        nombre,
        edad
    });
}

const usuariosPut =  (req, res = response) => {

    //capturar el id que manda el usuario o la vista
    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador de modificar',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador para borrar'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}