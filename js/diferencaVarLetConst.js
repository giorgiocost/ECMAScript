var status = "true"

// var funciona fora da estrutura
if( status  == "true"){
    var teste = 0;
}
console.log('TCL: nome', teste);

// let funcionar somente dentro da estrutura 
if( status  == "true"){
    let teste = 1;
    console.log('TCL: nome', teste);
}

// Não pode Alterar uma constante
const array = "teste";
// array = "aa";

console.log('TCL: array', array);