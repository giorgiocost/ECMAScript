var alunos = [
    {nome: "joao", idade: 15},
    {nome: "maria", idade: 20},
    {nome: "pedro", idade: 18},
    {nome: "josé", idade: 17}
];


var maiorDeIdade = 18;
var filtrarAlunos = alunos.filter((aluno)=>{
    if(aluno.idade < maiorDeIdade)
        return aluno;
});

console.log(filtrarAlunos);