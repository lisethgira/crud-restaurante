/*
Mongoose es una biblioteca de JavaScript que le permite definir esquemas con datos 
fuertemente tipados. Una vez que se define un esquema, 
Mongoose le permite crear un Modelo basado en un esquema específico. 
Un modelo de mongoose se asigna a un documento MongoDB a través de la 
definición del esquema del modelo.
Instalación: npm install mongoose --save
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  description: String,
  precio:String,
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('platos', TaskSchema);
