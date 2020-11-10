export const CARREGAR_NOTAS = 'CARREGAR_NOTAS';
export const CARREGAR_NOTAS_START = 'CARREGAR_NOTAS_START';
export const CARREGAR_NOTAS_END = 'CARREGAR_NOTAS_END';

export const ADD_NOTA = 'ADD_NOTA';

export const EXCLUIR_NOTA = 'EXCLUIR_NOTA';

export function carregarNotas() {
    return {
        type: CARREGAR_NOTAS
    };
}

export function adicionarNota(nota) {
    return {
        type: ADD_NOTA,
        nota
    }
}

export function excluirNota(id) {
    return {
        type: EXCLUIR_NOTA,
        id
    }
}

