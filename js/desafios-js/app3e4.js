class human {
    constructor(nome, idade, hobbies){
        this.nome = nome,
        this.idade = idade,
        this.hobbies = hobbies
    }

    showObject(){
        console.log(`nome: ${this.nome} \nidade: ${this.idade}`);
        this.hobbies.forEach((hobbie, i) =>{
            console.log(`hobbie${i+1}: ${hobbie}`);
        });
    }
}

const brenno = new human('brenno', 22, ['jogar magic the gathering', 'musculação', 'longbaord']);


showObject();