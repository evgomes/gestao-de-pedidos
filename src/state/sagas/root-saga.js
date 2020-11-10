import { all, fork } from 'redux-saga/effects';

import * as empresas from './empresas';
import * as ciclos from './ciclos';
import * as anos from './anos';
import * as pedidos from './pedidos';
import * as notas from './notas';

export default function* rootSaga() {
    yield all([
        fork(empresas.carregarEmpresasWatcher),
        fork(empresas.alterarEmpresaWatcher),
        fork(anos.carregarAnoAtualWatcher),
        fork(anos.incrementarAnoWatcher),
        fork(anos.decrementarAnoWatcher),
        fork(ciclos.carregarCicloAtualWatcher),
        fork(ciclos.incrementarCicloWatcher),
        fork(ciclos.decrementarCicloWatcher),
        fork(pedidos.carregarPedidosWatcher),
        fork(pedidos.adicionarPedidoWatcher),
        fork(pedidos.excluirPedidoWatcher),
        fork(notas.carregarNotasWatcher),
        fork(notas.adicionarNotaWatcher),
        fork(notas.excluirNotaWatcher),
    ]);
}