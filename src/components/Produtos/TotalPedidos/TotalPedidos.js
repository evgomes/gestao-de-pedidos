import React from 'react';
import { useSelector } from 'react-redux';

import { asCurrency } from '../../../services/currency';

const TotalPedidos = () => {
    const { pedidos } = useSelector(state => state.pedidos);
    const { ano } = useSelector(state => state.anos);
    const { ciclo } = useSelector(state => state.ciclos);

    if(!ano || !ciclo || !pedidos || pedidos.length === 0) {
        return null;
    }

    const total = pedidos.reduce((prev, next) => prev + (next.valorUnitario * next.quantidade), 0);

    return (
        <p>
            <strong>Total dos pedidos no ciclo {ciclo}:</strong> {asCurrency(total)}
        </p>
    );
}

export default TotalPedidos;