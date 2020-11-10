import { takeEvery, call, put, delay } from 'redux-saga/effects';

import { CARREGAR_NOTAS, CARREGAR_NOTAS_START, CARREGAR_NOTAS_END, ADD_NOTA, EXCLUIR_NOTA } from '../actions/notas';

import * as api from '../../services/api';

export function* carregarNotasWatcher() {
    yield takeEvery(CARREGAR_NOTAS, carregarNotas);
}

export function* adicionarNotaWatcher() {
    yield takeEvery(ADD_NOTA, adicionarNota);
}

export function* excluirNotaWatcher() {
    yield takeEvery(EXCLUIR_NOTA, excluirNota);
}


function* carregarNotas() {
    yield put({ type: CARREGAR_NOTAS_START });

    const url = `api/notas`;
    const response = yield call(api.get, url);

    const notas = response.data;

    yield put({ type: CARREGAR_NOTAS_END, notas });
}

function* adicionarNota({ nota }) {
    const url = `api/notas`;

    yield call(api.post, url, nota);
    yield delay(150);

    yield put({ type: CARREGAR_NOTAS });
}

function* excluirNota({ id }) {
    const url = `api/notas/${id}`;
    yield call(api.del, url);
    yield delay(150);

    yield put({ type: CARREGAR_NOTAS });
}