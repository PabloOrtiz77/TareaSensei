class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 100;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  sayName() {
    console.log(this.nombre);
  }
  showStats() {
    console.log(`nombre: ${this.nombre} fuerza: ${this.fuerza} velocidad: ${this.velocidad} 
        salud: ${this.salud}`);
  }
  drinkSake() {
    this.salud += 10;
  }
}

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }
  speakWisdom() {
    super.drinkSake();
  }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
