import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { adicionarPedido } from "../../../state/actions/pedidos";

import FieldError from '../../ui/FieldError/FieldError';

import { asCurrency } from "../../../services/currency";

const PedidoForm = () => {
    const dispatch = useDispatch();

    const { handleSubmit, register, errors, formState, reset } = useForm({
        mode: 'onChange'
    });

    const [valorUnitario, setValorUnitario] = useState(0);
    const [quantidade, setQuantidade] = useState(0);

    const onSubmit = (pedido) => {
        dispatch(adicionarPedido(pedido));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
                <div className="card-header font-weight-bold">
                    Novo pedido
            </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="codigo">Código</label>
                                <input
                                    id="codigo"
                                    name="codigo"
                                    type="number"
                                    className="form-control"
                                    placeholder="Ex.: 123321"
                                    ref={register({ required: true })} />
                                <FieldError show={errors.codigo}>
                                    Informe o código do produto.
                                </FieldError>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="produto">Produto</label>
                                <input
                                    id="produto"
                                    name="produto"
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex.: Lápis Soul azul"
                                    ref={register({ required: true })} />
                                <FieldError show={errors.produto}>
                                    Informe o nome do produto.
                            </FieldError>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="valorUnitario">Valor unitário</label>
                                <input
                                    id="valorUnitario"
                                    name="valorUnitario"
                                    type="number"
                                    min="0.00"
                                    step="0.01"
                                    pattern="^\d+(?:\.\d{1,2})?$"
                                    className="form-control"
                                    placeholder="Ex.: R$ 25,00"
                                    ref={register({ required: true })}
                                    onChange={(e) => setValorUnitario(+e.target.value)} />
                                <FieldError show={errors.valorUnitario}>
                                    Informe o valor unitário do produto (preço). O valor unitário deve seguir este formato (exemplo): R$ 10.50
                            </FieldError>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="quantidade">Quantidade</label>
                                <input
                                    id="quantidade"
                                    name="quantidade"
                                    type="number"
                                    className="form-control"
                                    placeholder="Ex.: 1"
                                    min="1"
                                    ref={register({ required: true })}
                                    onChange={(e) => setQuantidade(+e.target.value)} />
                                <FieldError show={errors.quantidade}>
                                    Informe a quantidade de produtos para o pedido.
                            </FieldError>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <label htmlFor="cliente">Cliente</label>
                            <input
                                id="cliente"
                                name="cliente"
                                type="text"
                                className="form-control"
                                placeholder="Ex.: Jhon Doe"
                                maxLength="100"
                                ref={register({ required: true })} />
                            <FieldError show={errors.cliente}>
                                Informe o nome do cliente que fez o pedido.
                        </FieldError>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <button className="btn btn-primary" disabled={!formState.isValid}>Adicionar</button>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <strong>Total:</strong> {asCurrency(quantidade * valorUnitario)}
                </div>
            </div>
        </form>
    );
}

export default PedidoForm;