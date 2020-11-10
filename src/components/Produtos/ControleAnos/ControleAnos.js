import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementarAno, decrementarAno } from "../../../state/actions/anos";

const ControleAnos = () => {
    const { ano } = useSelector(state => state.anos);
    const dispatch = useDispatch();

    const onIncrementarAnoHandler = () => {
        dispatch(incrementarAno());
    };

    const onDecrementarAnoHandler = () => {
        dispatch(decrementarAno());
    };

    if(!ano) {
        return <p>carregando ano...</p>;
    }
    
    return (
        <p className="d-flex align-items-center justify-content-lg-end">
            <span className="pt-1">
                <strong>Ano:</strong> {ano}
            </span>
            <button className="btn btn-secondary ml-4" onClick={onIncrementarAnoHandler}>+</button>
            <button className="btn btn-secondary ml-1" onClick={onDecrementarAnoHandler}>-</button>
        </p>
    );
}
 
export default ControleAnos;