const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';



        // Middleares
        this.middlewares();


        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static( 'public') );

    }

    routes() {
       
        //rutas del usuario
        this.app.use(this.usuariosPath , require('../routes/user.routes'));
    }


    listen() {
        this.app.listen( this.port , () => {
            console.log('Servidor corriendo en el puerto' , this.port);
        });
    }


}

module.exports = Server