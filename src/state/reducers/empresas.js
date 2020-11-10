import { CARREGAR_EMPRESAS_START, CARREGAR_EMPRESAS_END, ALTERAR_EMPRESA_END } from '../actions/empresas';

const initialState = {
    isLoading: false,
    empresas: null,
    empresaAtual: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CARREGAR_EMPRESAS_START:
            return {
                ...state,
                isLoading: true
            };
        case CARREGAR_EMPRESAS_END:
            const empresaSelecionada = (action.empresas && action.empresas.length > 0) ? action.empresas[0] : null;

            return {
                ...state,
                isLoading: false,
                empresas: action.empresas,
                empresaAtual: empresaSelecionada
            };
        case ALTERAR_EMPRESA_END:
            const empresaAtual = state.empresas.filter(e => e._id === action.empresa)[0];

            return {
                ...state,
                empresaAtual
            }
        default:
            return state;
    }
};