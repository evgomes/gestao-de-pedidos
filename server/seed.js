const { Empresa } = require('./models/empresa');
const { Nota } = require('./models/nota');
const { Pedido } = require('./models/pedido');

async function seedData() {
    try {

        const totalEmpresas = await Empresa.count({});
        if (totalEmpresas > 0) {
            return;
        }

        console.log('Limpando dados antigos...');

        await Nota.deleteMany({});
        await Pedido.deleteMany({});
        await Empresa.deleteMany({});

        console.log('Limpeza concluída!');
        console.log('Iniciando seed de dados...');

        const primeiraEmpresa = new Empresa({ nome: 'Empesa 1' });
        const segundaEmpresa = new Empresa({ nome: 'Empresa 2' });

        await primeiraEmpresa.save();
        await segundaEmpresa.save();

        const nota = new Nota({ data: new Date(), texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' });
        await nota.save();

        const pedido = new Pedido({
            codigo: 123,
            produto: 'Perfume teste',
            valorUnitario: 120.45,
            quantidade: 2,
            cliente: 'Cliente Teste',
            ano: 2020,
            ciclo: 1,
            empresa: primeiraEmpresa._id,
        });

        await pedido.save();

        console.log('Finalizado seed!');
    } catch (e) {
        console.log(e)
    }
}

module.exports = seedData;