const mongoose = require('mongoose');

const Nota = mongoose.model('notas', new mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    }
}));

module.exports.Nota = Nota;