import axios from 'axios';

import { put as putSaga } from 'redux-saga/effects';
import { ASYNC_START, ASYNC_END } from '../state/actions/async';

const url = 'http://localhost:3000' || window.location.origin.toString();

axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
    }
});

function onError(error) {
    return error.response;
}

export function* get(source) {
    try {
        yield putSaga({ type: ASYNC_START });
        return yield axios.get(`${url}/${source}`, { withCredentials: false });
    } catch (error) {
        return yield onError(error);
    }
    finally {
        yield putSaga({ type: ASYNC_END });
    }
}

export function* post(source, data) {
    try {
        yield putSaga({ type: ASYNC_START });
        return yield axios.post(`${url}/${source}`, data, { withCredentials: false });
    } catch (error) {
        return yield onError(error);
    } finally {
        yield putSaga({ type: ASYNC_END });
    }
}

export function* put(source, data) {
    try {
        yield putSaga({ type: ASYNC_START });
        return yield axios.put(`${url}/${source}`, data, { withCredentials: false });
    } catch (error) {
        return yield onError(error);
    } finally {
        yield putSaga({ type: ASYNC_END });
    }
}

export function* del(source) {
    try {
        yield putSaga({ type: ASYNC_START });
        return yield axios.delete(`${url}/${source}`, { withCredentials: false });
    } catch (error) {
        return yield onError(error);
    } finally {
        yield putSaga({ type: ASYNC_END });
    }
}