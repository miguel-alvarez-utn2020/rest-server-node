const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../DB/config');

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        //conectar a base de datos
        this.conectarDB();

        //Middleweres
        this.middleweres();

        //Parseo y Lectura del Body 
        this.app.use( express.json() );

        //rutas de mi app
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middleweres(){
        //CORS
        this.app.use( cors() );
        //Directorio Público
        this.app.use( express.static( 'public' ) );
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/user'));
          
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}

module.exports = {
    Server
}