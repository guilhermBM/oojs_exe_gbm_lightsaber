//Criando a Abstração.
function Sabre(cabo, material) {
    this.cabo = cabo;
    this.material = material;
}

//criando a classe herdeira1
function Jedi(cabo, material,cristal, lamina, nome) {
    this.nome = nome;
    this.cristal = cristal;
    this.lamina = lamina;


    //chamando os atributos da abstração Sabre
    Sabre.call(this, cabo, material)
}

//cirando a classe herdeira2
function Sith(cabo, material,cristal, lamina, nome) {
    this.nome = nome;
    this.cristal = cristal;
    this.lamina = lamina;

    //chamando os atributos da abstração sabre
    Sabre.call(this, cabo, material)
}

//Exemplos de Clase em Jedi e Sith
const jedi1 = new Jedi("Comun", "Durasteel","Kyber Azul", "Padrão", "ObiWanKenobi");
const jedi2 = new Jedi ("Comun", "Durasteel", "Kyber Verde", "Shoto", "Yoda");
const sith1 = new Sith("Duplo", "Durasteel", "Sintético Vermelho", "Dupla", "Darth Maul");
const sith2 = new Sith("Comun", "Durasteel", "Sintético Vermelho", "Padrão", "Darth Vader");

//chamada no console
console.log(jedi1);
console.log(jedi2);
console.log(sith1);
console.log(sith2);