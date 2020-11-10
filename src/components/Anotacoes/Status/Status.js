import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Status = () => {
    const { notas, isLoading, ultimaAtualizacao } = useSelector(state => state.notas);

    const naoHaNotas =  (isLoading || !notas || notas.length === 0);

    const totalNotas = (naoHaNotas) ? 0 : notas.length;
    const dataAtualizacao = moment(ultimaAtualizacao).format('DD/MM/YYYY - HH:MM:ss')

    return (
        <div className="card mb-4">
            <div className="card-header font-weight-bold">
                Status
        </div>
            <div className="card-body mb-0">
                <p>
                    <strong>Total de notas:</strong> {totalNotas}
                </p>
                <p>
                    <strong>Atualizado em: </strong> {dataAtualizacao} 
                </p>
            </div>
        </div>
    );
}

export default Status;