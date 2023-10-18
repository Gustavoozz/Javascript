// Foreach = Retorna "Void".
// Map = Retorna um novo Array modificado.
// Filter = Retorna um novo array apenas com elementos que atenderam uma condição.
// Reduce = Retorna apenas um único resultado.

// Filter:
// const numeros = [1, 2, 5, 10, 300];

// const maiordez = numeros.filter((e) =>{
//     return e > 10;
// });

// console.log(numeros);
// console.log(maiordez);


const comentarios = [
    {comentario: "Adorei.", exibe: true},
    {comentario: "Evento podre!", exibe: false},
    {comentario: "Achei meio paia.", exibe: true},
]

const comentariosOk =  comentarios.filter((c) => {
    return c.exibe === true;
})

comentariosOk.forEach(c => {
    console.log(c.comentario)
});
