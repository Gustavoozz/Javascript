const camisaNike = {
    descricao: "Camisa da marca Nike.",
    preco: 199.99,
    marca: "Nike",
    tamanho: "G",
    cor: "Preto",
    promo: true
}

// const descricao = camisaNike.descricao;
// const preco = camisaNike.preco;
// const marca = camisaNike.marca;
// const tamanho = camisaNike.tamanho;
// const cor = camisaNike.cor;
// const promo = camisaNike.promo;

// const { descricao, preco, promo } = camisaNike;

// console.log(`
//     Produto: ${descricao}
//     Preco: ${preco}
//     Promoção: ${promo ? "Sim!" : "Não!"}
// `);

// ? = IF ternário.

const evento = {
    dataEvento: new Date(),
    descricaoEvento: "Evento para estudiosos amantes de programação Front-End.",
    tituloEvento: "Front-End SENAI.",
    presencaEvento: true,
    comentarioEvento: "Um ótimo evento!"
}

const { dataEvento, descricaoEvento, tituloEvento, presencaEvento, comentarioEvento } = evento;

console.log(`
    Data do evento: ${dataEvento},
    Descrição: ${descricaoEvento},
    Titulo: ${tituloEvento},
    Presença: ${presencaEvento ? "Sim!" : "Não!"},
    Comentário: ${comentarioEvento},
`)