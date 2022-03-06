const bcryptjs = require('bcryptjs');
const {response, request} = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const usuariosGet =  (req = request, res = response) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get api - Controlador',
        q,
        nombre,
        apikey
    })
  }

const usuariosPut =   (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put api - Controlador',
        id
    })
  }

const usuariosPost = async (req, res = response) => {

    const error = validationResult(req);
    if(!error.isEmpty() ){
        return res.status(400).json(error);
    }
    const {nombre, correo, pass, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, pass, rol} );
    //Versificar si el correo existe
    const existeEmail = await Usuario.findOne( {correo} );
    if( existeEmail ){
        return res.status(400).json({
            msg: 'Ese correo esta registrado'
        })
    }
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.pass = bcryptjs.hashSync( pass, salt );

    //Guardad en DB
    await usuario.save();
    res.json({
        msg: 'post api - Controlador',
        usuario
    })
  }

const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'delete api - Controlador'
    })
  }
  
const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch api - Controlador'
    })
  }


  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch,

  }