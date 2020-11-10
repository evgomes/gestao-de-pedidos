import React from 'react';
import { useSelector } from 'react-redux'

import Nota from '../Nota/Nota';

const ListaNotas = () => {
    const { notas, isLoading } = useSelector(state => state.notas);

    if (isLoading) {
        return <div className="row">
            <div className="col">
                <p>Carregando anotações...</p>
            </div>
        </div>
    }

    if (!notas || notas.length === 0) {
        return <div className="row">
            <div className="col">
                <p>Não há anotações para exibição no momento.</p>
            </div>
        </div>
    }

    const notasToRender = notas.map((nota) => (
        <div key={nota._id} className="col-12 col-lg-4">
            <Nota nota={nota} />
        </div>)
    );

    return (
        <div className="row">
            {notasToRender}
        </div>
    );
}

export default ListaNotas;