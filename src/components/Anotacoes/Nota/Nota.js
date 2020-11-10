import React from 'react';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { excluirNota } from '../../../state/actions/notas';

const Nota = ({nota}) => {
    const { _id, texto, data } = nota;

    const dispatch = useDispatch();

    const onExcluirNota = (id) => {
        dispatch(excluirNota(id));
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>{texto}</p>
            </div>
            <div className="card-footer">
                <p className="small">Adicionada em {moment(data).format('DD/MM/YYYY - HH:MM:ss')}</p>
            
                <button type="button" className="btn btn-danger btn-block" onClick={() => onExcluirNota(_id)}>Excluir</button>
            </div>
        </div>
    );
}

export default Nota;