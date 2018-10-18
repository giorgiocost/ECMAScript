let addNumeros = [5,6,7,8,9,10];

let numeros = [0,1,2,3,4,...addNumeros];

console.log(numeros);

let addlista = {
    sobreNome: "Costa",
    idade: 27
}

let lista = {
    nome: "Giorgio",
    ...addlista
}

console.log('TCL: lista', lista);