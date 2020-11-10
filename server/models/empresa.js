const mongoose = require('mongoose');

const Empresa = mongoose.model('empresas', new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    }
}));

module.exports.Empresa = Empresa;