class Person{
    constructor(name){
        this.name = name;
    }

    saveMyName(){
        return `Meu nome é ${this.name}`
    }
}

//Esportando a classe person para que outros arquivos posssam usar ela
module.exports = {
    Person
}