import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import { adicionarNota } from '../../../state/actions/notas';

const NovaAnotacao = () => {
    const dispatch = useDispatch();

    const [texto, setTexto] = useState('');

    const onAdicionarNotaHandler = () => {
        const nota = { texto };
        dispatch(adicionarNota(nota));

        setTexto('');
    };

    return (
        <div className="card">
            <div className="card-header font-weight-bold">
                Nova Anotação
            </div>
            <div className="card-body mb-0">
                <div className="form-group">
                    <textarea
                        id="texto"
                        name="texto"
                        className="form-control"
                        rows="5"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)} />
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary btn-block" onClick={onAdicionarNotaHandler} disabled={texto.length === 0}>Adicionar</button>
            </div>
        </div>
    );
}

export default NovaAnotacao;