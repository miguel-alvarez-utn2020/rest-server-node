const mongoose = require('mongoose');

const dbConnection = async ()=> {

    try{
        
       await mongoose.connect( process.env.MONGODB_CNN, {
           //opciones soportadas en la version 5 de mongoose
           useNewUrlParser: true,

           useUnifiedTopolohy:true,

           useCreateIndex: true,

           useFindAndModify: false
       } )
       
       console.log('base de datos online');
       
    }catch( error ){
        console.log(error);
        throw new Error('Error al inicia la base de datos');
    }

}


module.exports = {
    dbConnection
}