function addEndereco(endereco) {

    var {cidade,estado} = endereco;
    const novoEndereco = {
        cidade,
        estado,
        pais: "Brasil"
    }

    var {cidade, estado, pais} = novoEndereco;

    console.log(`
        CIDADE: ${cidade}
        ESTADO: ${estado}
        PAÍS: ${pais}
    `);
}

addEndereco({cidade:"Campina Grande",estado:"Paraíba"});