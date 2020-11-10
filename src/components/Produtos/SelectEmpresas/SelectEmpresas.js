import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { alterarEmpresa } from '../../../state/actions/empresas';

const SelectEmpresas = () => {
    const dispatch = useDispatch();
    const { empresas } = useSelector(state => state.empresas);

    if(!empresas || empresas.length === 0) {
        return null;
    }
    
    const opcoes = empresas.map((empresa, index) => (<option key={index} value={empresa._id}>{empresa.nome}</option>))

    const onAlterarEmpresaHandler = (e) => {
        dispatch(alterarEmpresa(e.target.value));
    }

    return (
        <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <select id="empresa" name="empresa" className="form-control" defaultValue={empresas[0]._id} onChange={onAlterarEmpresaHandler}>
                {opcoes}
            </select>
        </div>
    );
}
 
export default SelectEmpresas;