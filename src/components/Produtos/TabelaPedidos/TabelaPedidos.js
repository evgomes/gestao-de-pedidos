import React from 'react';
import { useSelector } from 'react-redux';

import LinhaPedido from './LinhaPedido/LinhaPedido';

const TabelaPedidos = () => {
    const { pedidos, isLoading } = useSelector(state => state.pedidos);

    if (isLoading) {
        return null;
    }

    if (!pedidos || pedidos.length === 0) {
        return (
            <div className="card">
                <div className="card-body pb-0">
                    <p>Não há pedidos para o ciclo atual.</p>
                </div>
            </div>
        );
    }

    const lines = pedidos.map((pedido, index) => (<LinhaPedido key={index} pedido={pedido} />));

    return (
        <div className="card table-responsive">
            <table className="table table-striped text-center mb-0">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Valor Unitário</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lines}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaPedidos;