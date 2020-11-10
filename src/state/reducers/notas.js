import * as notas from '../actions/notas'; 

const initialState = {
    isLoading: false,
    ultimaAtualizacao: new Date(),
    notas: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case notas.CARREGAR_NOTAS_START: {
            return {
                ...state,
                isLoading: true,
                ultimaAtualizacao: new Date(),
            };
        }
        case notas.CARREGAR_NOTAS_END: {
            return {
                ...state,
                isLoading: false,
                notas: action.notas,
                ultimaAtualizacao: new Date(),
            };
        }
        default: {
            return state;
        }
    }
}