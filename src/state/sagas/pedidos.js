import { takeEvery, call, put, select, delay } from 'redux-saga/effects';

import { CARREGAR_PEDIDOS, CARREGAR_PEDIDOS_START, CARREGAR_PEDIDOS_END, ADD_PEDIDO, EXCLUIR_PEDIDO } from '../actions/pedidos';

import * as api from '../../services/api';

export function* carregarPedidosWatcher() {
    yield takeEvery(CARREGAR_PEDIDOS, carregarPedidos);
}

export function* adicionarPedidoWatcher() {
    yield takeEvery(ADD_PEDIDO, adicionarPedido);
}

export function* excluirPedidoWatcher() {
    yield takeEvery(EXCLUIR_PEDIDO, excluirPedido);
}

function* carregarPedidos() {
    yield put({ type: CARREGAR_PEDIDOS_START });

    const { empresaAtual } = yield select(state => state.empresas);
    const { ano } = yield select(state => state.anos);
    const { ciclo } = yield select(state => state.ciclos);

    const url = `api/pedidos/${empresaAtual._id}/${ano}/${ciclo}`;
    const response = yield call(api.get, url);

    const pedidos = response.data;
    yield put({ type: CARREGAR_PEDIDOS_END, pedidos });
}

function* adicionarPedido({ pedido }) {
    const url = `api/pedidos`;

    const { empresaAtual } = yield select(state => state.empresas);
    const { ano } = yield select(state => state.anos);
    const { ciclo } = yield select(state => state.ciclos);

    const pedidoParaInclusao = {
        ...pedido,
        ciclo,
        ano,
        empresa: empresaAtual._id,
    };

    yield call(api.post, url, pedidoParaInclusao);
    yield delay(500);

    yield put({ type: CARREGAR_PEDIDOS });
}

function* excluirPedido({ id }) {
    const url = `api/pedidos/${id}`;
    yield call(api.del, url);
    yield delay(500);

    yield put({ type: CARREGAR_PEDIDOS });
}