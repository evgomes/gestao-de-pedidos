const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose
    .connect("mongodb://mongodb:27017/gestao-pedidos", { useNewUrlParser: true })
    .then(() => console.log(`Conectado ao banco de dados...`));
};

module.exports = connectToDatabase;