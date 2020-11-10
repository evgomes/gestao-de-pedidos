const connectToDatabase = require('./startup/db');
const seedData = require('./seed');

const express = require("express");
const cors = require('cors')

const path = require("path");
const PORT = process.env.PORT || 3000;

const empresas = require("./routes/empresas");
const ciclos = require("./routes/ciclos");
const pedidos = require('./routes/pedidos');
const notas = require('./routes/notas');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());

app.use('/api/empresas', empresas);
app.use('/api/ciclos', ciclos);
app.use('/api/pedidos', pedidos);
app.use('/api/notas', notas);

app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});

connectToDatabase();
seedData();

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));