class Animal{
    
    constructor(tipo, pernas){
        this.tipo = tipo;
        this.pernas = pernas;
    }

    fazerBarulho(som = 'Som Qualquer'){
        return som;
    }
}

export class Gato extends Animal{
    fazerBarulho(som = 'Miau'){
        return som;
    }
}

export class Cachorro extends Animal{
    fazerBarulho(som = 'Au Au'){
        return som;
    }
}