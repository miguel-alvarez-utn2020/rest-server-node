const {Schema, model} = require("mongoose");


const RoleSchema = Schema({
    rol:{
        type:String,
        require:[true, 'El ROL es obligatorio']
    }
});

module.exports = model ('Rol', RoleSchema );