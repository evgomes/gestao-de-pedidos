import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { carregarNotas } from '../../state/actions/notas';

import NovaAnotacao from '../../components/Anotacoes/NovaAnotacao/NovaAnotacao';
import Status from '../../components/Anotacoes/Status/Status';
import ListaNotas from '../../components/Anotacoes/ListaNotas/ListaNotas';

const Anotacoes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carregarNotas());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Anotações</h2>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 col-lg-3">
                    <div className="row">
                        <div className="col">
                            <NovaAnotacao />
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="row mt-4">
                        <div className="col">
                            <Status />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 offset-lg-1">
                    <ListaNotas />
                </div>
            </div>
        </div>
    );
}

export default Anotacoes;