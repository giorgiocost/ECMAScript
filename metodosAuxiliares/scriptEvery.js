var jogos = [
    //{nome: "Uncharted 4: A Thiefs End", categoria: "acao"},
    {nome: "Gran Turismo 6", categoria: "corrida"},
    {nome: "Need for Speed Most Wanted", categoria: "corrida"},
    {nome: "Mario Kart 8", categoria: "corrida"},
    {nome: "Forza Motorsport", categoria: "corrida"}
];

//Retorna Booleano
var todosJogosDeCorrida = jogos.every((jogo)=>{
    return jogo.categoria === "corrida"; 
});

console.log(todosJogosDeCorrida);