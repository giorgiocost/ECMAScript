var jogos = [
    {nome: "Uncharted 4: A Thiefs End", categoria: "acao"},
    {nome: "Gran Turismo 6", categoria: "corrida"}
];

var temJogoDeCorrida = jogos.some((jogo)=>{
    return jogo.categoria == "corrida";
});


console.log(temJogoDeCorrida);