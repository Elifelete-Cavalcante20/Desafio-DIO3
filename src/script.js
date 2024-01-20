class hero { 
    constructor (name, type, age,){
        this.name = name
        this.type = type
        this.age = age
        
    }
    atak(){ 

     let blow;

       switch (this.type){
        case "Mago": 
            blow = "usando magia"
            break;
        case "Guerreiro":
            blow = "usando espada"
            break;
        case "Monge":
            blow = "usando artes marcias"
            break;
        case "Ninja": 
            blow = "usando shuriken"
            break;
       }
       console.log(`O ${this.type} chamado, ${this.name}, atacou ${blow}`)
    }
 }


let monge = new hero ("Tsubasa", "Monge", "125")
let guerreiro = new hero ("Haaland", "Guerreiro", "23")
let ninja = new hero ("Yasu", "Ninja", "45")
let mago = new hero ("Dumbledor", "Mago", "367")

monge.atak()
guerreiro.atak()
monge.atak()
mago.atak()