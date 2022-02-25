const {response, request} = require('express');

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

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post api - Controlador',
        nombre,
        edad
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