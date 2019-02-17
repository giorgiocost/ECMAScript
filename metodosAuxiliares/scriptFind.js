var alunos = [
    {nome: "joao", idade: 15},
    {nome: "maria", idade: 20},
    {nome: "pedro", idade: 18},
    {nome: "josé", idade: 17}
];

var nomeDoAluno = "pedro";

var buscarAluno = alunos.find((aluno) => {
    if (aluno.nome == nomeDoAluno)
        return aluno; 
})


console.log(buscarAluno);