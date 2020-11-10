export const CARREGAR_PEDIDOS = 'CARREGAR_PEDIDOS';
export const CARREGAR_PEDIDOS_START = 'CARREGAR_PEDIDOS_START';
export const CARREGAR_PEDIDOS_END = 'CARREGAR_PEDIDOS_END';

export const ADD_PEDIDO = 'ADD_PEDIDO';

export const EXCLUIR_PEDIDO = 'EXCLUIR_PEDIDO';


export function carregarPedidos() {
    return {
        type: CARREGAR_PEDIDOS
    };
}

export function adicionarPedido(pedido) {
    return {
        type: ADD_PEDIDO,
        pedido
    }
}

export function excluirPedido(id) {
    return {
        type: EXCLUIR_PEDIDO,
        id
    }
}

