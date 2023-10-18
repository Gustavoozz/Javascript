// Foreach = Retorna "Void".
// Map = Retorna um novo Array modificado.
// Filter = Retorna um novo array apenas com elementos que atenderam uma condição.
// Reduce = Retorna apenas um único resultado.

// Reduce:
const numeros = [1, 2, 5, 10, 300];

// Estrutura reduce = Função de Callback e o valor inicial (Ex: 15).
const soma = numeros.reduce((valorInicial, n) => {
    return valorInicial + n;
}, 15)

console.log(soma);