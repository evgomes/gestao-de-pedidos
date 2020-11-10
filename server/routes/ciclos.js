const express = require('express');

const { Pedido } = require('../models/pedido');

const router = express.Router();

router.get('/:empresa/:ano/atual', async (req, res) => {
    const pedidos = await Pedido.find({ empresa: req.params.empresa, ano: +req.params.ano });

    if(!pedidos || pedidos.length === 0) {
        return res.send({ ciclo: 1 });
    }

    const pedidoCicloAtual = pedidos.reduce((prev, current) => (prev.ciclo > current.ciclo) ? prev : current);
    return res.send({ ciclo: pedidoCicloAtual.ciclo });
});

module.exports = router;