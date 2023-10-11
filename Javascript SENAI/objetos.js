let gustavo = {
    nome : "Gustavo",
    idade : 18,
    altura : 1.78
};

gustavo.peso = 60

let ronaldo = new Object();

ronaldo.nome = "Ronaldo";
ronaldo.idade = 40;
ronaldo.sobrenome = "Fenômeno";

pessoas.push(gustavos);
pessoas.push(ronaldo);

// ForEach comum:
pessoas.forEach(function(v, i){
    console.log(`Nome${i + 1}: ${v.nome}`)
})

// Ou

// Com arrow function ( Expressão lambda ):
pessoas.forEach((v, i) => {
    console.log(`Nome${i + 1}: ${v.nome}`)
})
