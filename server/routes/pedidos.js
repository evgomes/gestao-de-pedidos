const express = require('express');

const successResponse = require('../resources/success-response');
const errorResponse = require('../resources/error-response');

const { Pedido } = require('../models/pedido');

const router = express.Router();

router.get('/:empresa/:ano/:ciclo', async (req, res) => {
    const pedidos = await Pedido.find({ empresa: req.params.empresa, ano: +req.params.ano, ciclo: +req.params.ciclo });
    return res.send(pedidos);
});

router.post('/', async (req, res) => {
    const { codigo, produto, valorUnitario, quantidade, cliente, ano, ciclo, empresa } = req.body;
    const pedido = new Pedido ({ codigo, produto, valorUnitario, quantidade, cliente, ano, ciclo, empresa });

    await pedido.save();

    return res.send(successResponse(pedido));
});

router.delete('/:id', async (req, res) => {
    const pedido = await Pedido.findById(req.params.id);

    if(!pedido) {
        return res.status(404).send(errorResponse('Pedido não encontrado.'));
    }

    await Pedido.deleteOne({ _id: req.params.id });
    return res.send(successResponse(pedido));
});

module.exports = router;