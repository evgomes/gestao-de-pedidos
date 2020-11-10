const express = require('express');

const successResponse = require('../resources/success-response');

const { Empresa } = require('../models/empresa');

const router = express.Router();

router.get('/', async (_, res) => {
    const empresas = await Empresa.find({});
    return res.send(empresas);
});

router.post('/', async (req, res) => {
    const { nome } = req.body;
    const empresa = new Empresa ({ nome });

    await empresa.save();

    return res.send(successResponse(empresa));
});

module.exports = router;