const express = require('express');

const successResponse = require('../resources/success-response');
const errorResponse = require('../resources/error-response');

const { Nota } = require('../models/nota');

const router = express.Router();

router.get('/', async (_, res) => {
    const notas = await Nota.find({}).sort({ data: 'desc' });
    return res.send(notas);
});

router.post('/', async (req, res) => {
    const { texto } = req.body;
    const nota = new Nota ({ texto, data: new Date() });

    await nota.save();

    return res.send(successResponse(nota));
});

router.delete('/:id', async (req, res) => {
    const nota = await Nota.findById(req.params.id);

    if(!nota) {
        return res.status(404).send(errorResponse('Nota não encontrada.'));
    }

    await Nota.deleteOne({ _id: req.params.id });
    return res.send(successResponse(nota));
});

module.exports = router;