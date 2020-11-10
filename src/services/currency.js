export function asCurrency(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}