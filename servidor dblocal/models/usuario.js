//import mongoose from 'mongoose';
//const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema, model} = require('mongoose');

var email = require('mongoose');
require('mongoose-type-email');
email.SchemaTypes.Email.defaults.message = 'Email invalido. Corregir!!';

// Roles
const roles = {
    values: ['ADMIN', 'DONADOR'],
    message: '{VALUE} no es un Rol válido'
}
// Tipo Identificacion
const tipoId = {
    values: ['CC', 'CE', 'RUT', 'NIT'],
    message: '{VALUE} no es un Tipo de Identificación Válido'
}
// Tipo Constitución Empresa
const tipoPersona = {
    values: ['Natural', 'Juridica'],
    message: '{VALUE} no es un dato Válido'
}
  
const usuarioSchema = new Schema ({
    _id: {type: Number, min: 11, max: 9999999999, required: [true, 'El número de Identificación es Requerido']},
    tipoId: {type: String, enum: tipoId, required: [true, 'El Tipo de Identificación es Requerido']},
    clave: {type: String, required: [true, 'Clave es Requerida'] },
    rol: {type: String, default: 'DONADOR', enum: roles, required: [true, 'Rol es Requerido'] },
    activo: {type: Boolean, default: true },
    activado: {type: Date, default: Date.now },
    desactivado: {type: Date},
    tipoPersona: {type: String, default: 'Natural', enum: tipoPersona, required: [true, 'El tipo de Empresa es Requerido']},
    nombre: {type: String, maxlength: 70, trim: true, required: [true, 'El Nombre es Requerido']},
    apellido: {type: String, maxlength: 50, trim: true, required: [true, 'El Apellido es Requerido']},
    fijo: {type: Number},
    celular: {type: Number, min: 1000000000, max: 99999999999999, required: [true, 'El número Celular es Requerido']},
    correo: {type: email.SchemaTypes.Email, correctTld: true, required: [true, 'Email Requerido']},
    direccion: {type: String, maxlength: 50, trim: true, required: [true, 'La Dirección es Requerida']}
});

//Convertir modelo
//const usuario = mongoose.model('usuario', usuarioSchema);
//export default usuario;
module.exports = model('usuario', usuarioSchema);