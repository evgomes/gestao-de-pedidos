import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { carregarEmpresas } from '../../state/actions/empresas';

import ControleAnos from '../../components/Produtos/ControleAnos/ControleAnos';
import ControleCiclos from '../../components/Produtos/ControleCiclos/ControleCiclos';
import PedidoForm from '../../components/Produtos/PedidoForm/PedidoForm';
import TabelaPedidos from '../../components/Produtos/TabelaPedidos/TabelaPedidos';
import TotalPedidos from '../../components/Produtos/TotalPedidos/TotalPedidos';
import SelectEmpresas from '../../components/Produtos/SelectEmpresas/SelectEmpresas';


const Pedidos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carregarEmpresas());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Meus Pedidos</h2>
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-end">
                <div className="col-12 col-lg-4">
                    <SelectEmpresas />
                </div>
                <div className="col-12 col-lg-4">
                    <ControleAnos />
                </div>
                <div className="col-12 col-lg-4">
                    <ControleCiclos />
                </div>
            </div>
            <hr className="divider" />

            <div className="row mb-4">
                <div className="col">
                    <PedidoForm />
                </div>
            </div>

            <hr className="divider" />
            <div className="row mt-4 mb-2">
                <div className="col-12">
                    <TabelaPedidos />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TotalPedidos />
                </div>
            </div>
        </div>
    );
}

export default Pedidos;