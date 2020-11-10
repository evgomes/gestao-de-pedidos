import { CARREGAR_CICLO_ATUAL_START , CARREGAR_CICLO_ATUAL_END } from '../actions/ciclos';

const initialState = {
    isLoading: false,
    ciclo: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CARREGAR_CICLO_ATUAL_START:
            return {
                ...state,
                isLoading: true
            };
        case CARREGAR_CICLO_ATUAL_END:
            return {
                ...state,
                isLoading: false,
                ciclo: action.ciclo
            };
        default:
            return state;
    }
};