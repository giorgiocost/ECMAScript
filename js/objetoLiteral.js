function setInfo(nome, sobrenome, idade) {
    const newInfo = {
        nome,
        sobrenome,
        idade
    }
    console.log(newInfo);
    return newInfo;
}

setInfo("Giorgio","Costa",27);