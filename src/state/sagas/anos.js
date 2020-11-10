import { takeEvery, put, select, delay } from 'redux-saga/effects';

import { CARREGAR_ANO_ATUAL, CARREGAR_ANO_ATUAL_START, CARREGAR_ANO_ATUAL_END, INCREMENTAR_ANO, DECREMENTAR_ANO } from '../actions/anos';
import { CARREGAR_CICLO_ATUAL } from '../actions/ciclos';
import { CARREGAR_PEDIDOS } from '../actions/pedidos';

export function* carregarAnoAtualWatcher() {
    yield takeEvery(CARREGAR_ANO_ATUAL, carregarAnoAtual);
}

export function* incrementarAnoWatcher() {
    yield takeEvery(INCREMENTAR_ANO, incrementarAno);
}

export function* decrementarAnoWatcher() {
    yield takeEvery(DECREMENTAR_ANO, decrementarAno);
}

function* carregarAnoAtual() {
    yield put({ type: CARREGAR_ANO_ATUAL_START });

    const ano = new Date().getFullYear();
    
    yield put({ type: CARREGAR_ANO_ATUAL_END, ano });
}

function* incrementarAno() {
    yield put({ type: CARREGAR_ANO_ATUAL_START });

    const { ano } = yield select(state => state.anos);
    const anoAtual = ano + 1;

    yield put({ type: CARREGAR_ANO_ATUAL_END, ano: anoAtual });
    yield put({ type: CARREGAR_CICLO_ATUAL });
    yield delay(150);
    yield put({ type: CARREGAR_PEDIDOS });
}

function* decrementarAno() {
    yield put({ type: CARREGAR_ANO_ATUAL_START });

    const { ano } = yield select(state => state.anos);
    const anoAtual = ano - 1;

    yield put({ type: CARREGAR_ANO_ATUAL_END, ano: anoAtual });
    yield put({ type: CARREGAR_CICLO_ATUAL });
    yield delay(150);
    yield put({ type: CARREGAR_PEDIDOS });
}