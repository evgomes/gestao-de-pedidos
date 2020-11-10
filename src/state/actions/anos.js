export const CARREGAR_ANO_ATUAL = 'CARREGAR_ANO_ATUAL';
export const CARREGAR_ANO_ATUAL_START = 'CARREGAR_ANO_ATUAL_START';
export const CARREGAR_ANO_ATUAL_END = 'CARREGAR_ANO_ATUAL_END';

export const INCREMENTAR_ANO = 'INCREMENTAR_ANO';
export const DECREMENTAR_ANO = 'DECREMENTAR_ANO';

export function carregarAnoAtual() {
    return {
        type: CARREGAR_ANO_ATUAL
    }
}

export function incrementarAno() {
    return {
        type: INCREMENTAR_ANO
    };
}

export function decrementarAno() {
    return {
        type: DECREMENTAR_ANO
    };
}