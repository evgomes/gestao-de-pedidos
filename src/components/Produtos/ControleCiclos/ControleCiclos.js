import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementarCiclo, decrementarCiclo } from "../../../state/actions/ciclos";

const ControleCiclos = () => {
    const { ciclo } = useSelector(state => state.ciclos);
    const dispatch = useDispatch();

    const onIncrementarCicloHandler = () => {
        dispatch(incrementarCiclo());
    };

    const onDecrementarCicloHandler = () => {
        dispatch(decrementarCiclo());
    };

    if(!ciclo) {
        return <p>carregando ciclo...</p>;
    }

    let cicloAtual = "carregando ciclo...";
    if(ciclo) {
        cicloAtual = ciclo;
    }

    return (
        <p className="d-flex align-items-center justify-content-lg-end">
            <span className="pt-1">
                <strong>Ciclo:</strong> { cicloAtual }
            </span>
            <button className="btn btn-secondary ml-4" onClick={onIncrementarCicloHandler}>+</button>
            <button className="btn btn-secondary ml-1" onClick={onDecrementarCicloHandler} disabled={ciclo === 1}>-</button>
        </p>
    );
}

export default ControleCiclos;