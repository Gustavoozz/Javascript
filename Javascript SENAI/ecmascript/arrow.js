// Foreach = Retorna "Void".
// Map = Retorna um novo Array modificado.
// Filter = Retorna um novo array apenas com elementos que atenderam uma condição.
// Reduce = Retorna apenas um único resultado.

// Normal function:
// const somar = function name(x , y) {
//     return x + y;
// }

// console.log(somar(50, 10))


// Arrow function:
// const somar = (x , y) => {
//     return x + y;
// }


// const dobro = (numero) => {
//     return numero * 2;
// }


// Quando há apenas um parâmetro, o parênteses pode ser omitido.
// const dobro = numero => {
//     return numero * 2;
// }


// O return também pode ser emitido caso haja apenas uma linha de ação.
// const dobro = numero => numero * 2;


// console.log(somar(50, 10));
// console.log(dobro(50));

// const boaTarde = () => {console.log("Boa tarde!")}
// boaTarde();

const convidados = [
    {nome: "Ronaldo", idade: 30},
    {nome: "Romario", idade: 45},
    {nome: "Ricardo", idade: 27},
    {nome: "Rogerio", idade: 55},
]

convidados.forEach(p => {
    console.log(`Convidado: ${p.nome}`)
})

