import { takeEvery, call, put, delay } from 'redux-saga/effects';

import { CARREGAR_EMPRESAS, CARREGAR_EMPRESAS_START, CARREGAR_EMPRESAS_END, ALTERAR_EMPRESA, ALTERAR_EMPRESA_END } from '../actions/empresas';

import * as api from '../../services/api';
import { CARREGAR_ANO_ATUAL } from '../actions/anos';
import { CARREGAR_CICLO_ATUAL } from '../actions/ciclos';
import { CARREGAR_PEDIDOS } from '../actions/pedidos';

export function* carregarEmpresasWatcher() {
    yield takeEvery(CARREGAR_EMPRESAS, carregarEmpresas);
}

export function* alterarEmpresaWatcher() {
    yield takeEvery(ALTERAR_EMPRESA, alterarEmpresa);
}

function* carregarEmpresas() {
    yield put({ type: CARREGAR_EMPRESAS_START });

    const url = `api/empresas`;
    const response = yield call(api.get, url);

    const empresas = response.data;

    yield put({ type: CARREGAR_EMPRESAS_END, empresas });

    yield put({ type: CARREGAR_ANO_ATUAL });
    yield put({ type: CARREGAR_CICLO_ATUAL });
    yield delay(150);
    yield put({ type: CARREGAR_PEDIDOS });
}

function* alterarEmpresa({ empresa }) {
    yield put({ type: ALTERAR_EMPRESA_END, empresa });
    yield put({ type: CARREGAR_CICLO_ATUAL });
    yield delay(150);
    yield put({ type: CARREGAR_PEDIDOS });
}