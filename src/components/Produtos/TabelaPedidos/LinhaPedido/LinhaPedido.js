import React from 'react';
import { useDispatch } from 'react-redux';

import { excluirPedido } from '../../../../state/actions/pedidos';
import { asCurrency } from '../../../../services/currency';

const LinhaPedido = (props) => {
    const dispatch = useDispatch();

    const onExcluirPedido = (id) => {
        dispatch(excluirPedido(id));
    }

    const { pedido } = props;

    return (
        <tr>
            <td>{pedido.codigo}</td>
            <td>{pedido.produto}</td>
            <td>{asCurrency(pedido.valorUnitario)}</td>
            <td>{pedido.quantidade}</td>
            <td>{asCurrency(pedido.valorUnitario * pedido.quantidade)}</td>
            <td>{pedido.cliente}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => onExcluirPedido(pedido._id)}>Excluir</button>
            </td>
        </tr>
    );
}

export default LinhaPedido;