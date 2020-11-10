const mongoose = require('mongoose');

const Pedido = mongoose.model('pedidos', new mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    },
    produto: {
        type: String,
        required: true,
        maxlength: 100,
    },
    valorUnitario: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
        maxlength: 100,
    },
    ano: {
        type: Number,
        required: true,
    },
    ciclo: {
        type: Number,
        required: true,
    },
    empresa: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}));

module.exports.Pedido = Pedido;