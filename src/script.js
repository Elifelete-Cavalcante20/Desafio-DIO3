class hero { 
    constructor (name, type, age, blow){
        this.name = name
        this.type = type
        this.age = age
        this.blow = blow
    }
    atak(){ 
        
        console.log(`O ${this.type}, ${this.name} ${this.blow}`)
    }
}

let monge = new hero ("Tsubasa", "Monge", "125","usou artes marciais")
let guerreiro = new hero ("Haaland", "Guerreiro", "23", "usou espada")

monge.atak()
guerreiro.atak()