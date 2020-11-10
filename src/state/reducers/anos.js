import { CARREGAR_ANO_ATUAL_START , CARREGAR_ANO_ATUAL_END } from '../actions/anos';

const initialState = {
    isLoading: false,
    ano: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CARREGAR_ANO_ATUAL_START:
            return {
                ...state,
                isLoading: true
            };
        case CARREGAR_ANO_ATUAL_END:
            return {
                ...state,
                isLoading: false,
                ano: action.ano
            };
        default:
            return state;
    }
};