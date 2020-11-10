import { ASYNC_START, ASYNC_END } from '../actions/async';

const initialState = {
    isAsyncCallRunning: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ASYNC_START:
            return {
                ...state,
                isAsyncCallRunning: true
            };
        case ASYNC_END:
            return {
                ...state,
                isAsyncCallRunning: false
            };
        default:
            return state;
    }
};