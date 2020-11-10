export const CARREGAR_EMPRESAS = 'CARREGAR_EMPRESAS';
export const CARREGAR_EMPRESAS_START = 'CARREGAR_EMPRESAS_START';
export const CARREGAR_EMPRESAS_END = 'CARREGAR_EMPRESAS_END';
export const ALTERAR_EMPRESA = 'ALTERAR_EMPRESA';
export const ALTERAR_EMPRESA_END = 'ALTERAR_EMPRESA_END';

export function carregarEmpresas() {
    return {
        type: CARREGAR_EMPRESAS
    };
}

export function alterarEmpresa(empresa) {
    return {
        type: ALTERAR_EMPRESA,
        empresa
    }
}