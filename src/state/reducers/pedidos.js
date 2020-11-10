import { CARREGAR_PEDIDOS_START, CARREGAR_PEDIDOS_END } from '../actions/pedidos';

const initialState = {
    isLoading: false,
    pedidos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CARREGAR_PEDIDOS_START:
            return {
                ...state,
                isLoading: true
            };
        case CARREGAR_PEDIDOS_END:
            return {
                ...state,
                isLoading: false,
                pedidos: action.pedidos
            };
        default:
            return state;
    }
};