const info = {
    nome: "Giorgio",
    idade: 27
}
console.log('TCL: nome', info.nome);


//desconstruindo
let {nome} = info;
console.log('TCL: nome', nome);

let {nome:meuNome, idade:minhaIdade} = info;
console.log('TCL: minhaIdade', minhaIdade);
console.log('TCL: meuNome', meuNome);

const numeros = [1,2,3,4];


let {3:ultimo} = numeros;
console.log('TCL: primeiro', ultimo);

let [primeiro,segundo,terceiro,quarto] = numeros;
console.log('TCL: terceiro', terceiro);


