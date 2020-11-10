export const CARREGAR_CICLO_ATUAL = 'CARREGAR_CICLO_ATUAL';
export const CARREGAR_CICLO_ATUAL_START = 'CARREGAR_CICLO_ATUAL_START';
export const CARREGAR_CICLO_ATUAL_END = 'CARREGAR_CICLO_ATUAL_END';

export const INCREMENTAR_CICLO = 'INCREMENTAR_CICLO';
export const DECREMENTAR_CICLO = 'DECREMENTAR_CICLO';

export function carregarCicloAtual() {
    return {
        type: CARREGAR_CICLO_ATUAL
    }
}

export function incrementarCiclo() {
    return {
        type: INCREMENTAR_CICLO
    };
}

export function decrementarCiclo() {
    return {
        type: DECREMENTAR_CICLO
    };
}