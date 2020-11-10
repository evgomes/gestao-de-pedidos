import { takeEvery, call, put, select } from 'redux-saga/effects';

import { CARREGAR_CICLO_ATUAL, CARREGAR_CICLO_ATUAL_START, CARREGAR_CICLO_ATUAL_END, INCREMENTAR_CICLO, DECREMENTAR_CICLO } from '../actions/ciclos';

import * as api from '../../services/api';
import { CARREGAR_PEDIDOS } from '../actions/pedidos';

export function* carregarCicloAtualWatcher() {
    yield takeEvery(CARREGAR_CICLO_ATUAL, carregarCicloAtual);
}

export function* incrementarCicloWatcher() {
    yield takeEvery(INCREMENTAR_CICLO, incrementarCiclo);
}

export function* decrementarCicloWatcher() {
    yield takeEvery(DECREMENTAR_CICLO, decrementarCiclo);
}

function* carregarCicloAtual() {
    yield put({ type: CARREGAR_CICLO_ATUAL_START });

    const { empresaAtual } = yield select(state => state.empresas);
    const { ano } = yield select(state => state.anos);

    const url = `api/ciclos/${empresaAtual._id}/${ano}/atual`;
    const response = yield call(api.get, url);

    const { ciclo } = response.data;

    yield put({ type: CARREGAR_CICLO_ATUAL_END, ciclo });
}

function* incrementarCiclo() {
    yield put({ type: CARREGAR_CICLO_ATUAL_START });

    const { ciclo } = yield select(state => state.ciclos);
    const cicloAtual = ciclo + 1;

    yield put({ type: CARREGAR_CICLO_ATUAL_END, ciclo: cicloAtual });
    yield put({ type: CARREGAR_PEDIDOS });
}

function* decrementarCiclo() {
    yield put({ type: CARREGAR_CICLO_ATUAL_START });

    const { ciclo } = yield select(state => state.ciclos);
    const cicloAtual = ciclo - 1;

    yield put({ type: CARREGAR_CICLO_ATUAL_END, ciclo: cicloAtual });
    yield put({ type: CARREGAR_PEDIDOS });
}