// Static

// En programación orientada a objetos (POO) en JavaScript, la palabra clave "static" se utiliza para definir miembros (métodos o propiedades) que pertenecen a la clase en sí misma en lugar de a instancias individuales de la clase. Esto significa que puedes acceder a los miembros estáticos directamente desde la clase, sin necesidad de crear una instancia de la clase.
// Para crear un método estático en JavaScript, puedes utilizar la palabra clave "static" en la definición de la clase. Aquí hay un ejemplo:

class MiClase {
    constructor(valor) {
      this.valor = valor;
    }
  
    // Método de instancia
    metodoDeInstancia() {
      return this.valor;
    }
  
    // Método estático
    static metodoEstatico() {
      return "¡Soy un método estático!";
    }
  }
  
  // Crear una instancia de la clase
  const instancia = new MiClase(42);
  
  // Llamar a un método de instancia
  console.log(instancia.metodoDeInstancia()); // Imprimirá 42
  
  // Llamar a un método estático
  console.log(MiClase.metodoEstatico()); // Imprimirá "¡Soy un método estático!"

// En este ejemplo, metodoEstatico es un método estático que pertenece a la clase MiClase en sí y no a las instancias individuales de la clase. Puedes llamar a metodoEstatico directamente desde la clase, sin necesidad de crear una instancia de MiClase.

// Los miembros estáticos son útiles cuando deseas definir funcionalidad que no depende de una instancia específica de la clase, como utilidades o métodos auxiliares que pueden ser compartidos por todas las instancias de la clase.
//https://platzi.com/new-home/clases/2419-javascript-poo-intermedio/39809-static-atributos-y-metodos-estaticos-en-javascript/