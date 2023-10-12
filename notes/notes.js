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

// Metodos estaticos del prototipo Object

// En JavaScript, el prototipo Object proporciona varios métodos estáticos que se pueden utilizar para realizar operaciones en objetos. A continuación, te mostraré algunos de los métodos estáticos más comunes del objeto Object y cómo utilizarlos con ejemplos de código:
// Object.keys(obj)
// Este método estático devuelve un array de las propiedades enumerables de un objeto.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Barcelona'
  };
  
  const propiedades = Object.keys(persona);
  console.log(propiedades); // Imprimirá ["nombre", "edad", "ciudad"]
  
//   Object.values(obj)
// Devuelve un array de los valores de las propiedades enumerables de un objeto.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Barcelona'
  };
  
  const valores = Object.values(persona);
  console.log(valores); // Imprimirá ["Juan", 30, "Barcelona"]
  
//   Object.entries(obj)
// Devuelve un array de arrays, donde cada subarray contiene una pareja clave-valor correspondiente a las propiedades enumerables del objeto.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Barcelona'
  };
  
  const entradas = Object.entries(persona);
  console.log(entradas);
  // Imprimirá [["nombre", "Juan"], ["edad", 30], ["ciudad", "Barcelona"]]
  
//   Object.assign(target, source1, source2, ...)
// Copia las propiedades enumerables de uno o más objetos fuente (source1, source2, ...) en un objeto destino (target).

const destino = { a: 1, b: 2 };
const fuente = { b: 3, c: 4 };

Object.assign(destino, fuente);

console.log(destino); // Imprimirá { a: 1, b: 3, c: 4 }

// Object.freeze(obj)
// Este método "congela" un objeto, lo que significa que no se pueden agregar, eliminar o modificar propiedades en él.

const persona = { nombre: 'Juan', edad: 30 };
Object.freeze(persona);

persona.nombre = 'Pedro'; // No se permitirá la modificación
console.log(persona); // Imprimirá { nombre: 'Juan', edad: 30 }

// Object.getOwnPropertyNames, Object.getOwnPropertySymbols, y Object.getOwnPropertyDescriptors son métodos estáticos que se utilizan para obtener información sobre las propiedades de un objeto, incluyendo propiedades no enumerables y símbolos. Aquí tienes ejemplos de cada uno de ellos:

// Object.getOwnPropertyNames(obj):
// Este método devuelve un array con todas las propiedades (tanto enumerables como no enumerables) de un objeto, excluyendo los símbolos.

const obj = {
    a: 1,
    [Symbol('b')]: 2,
  };
  
  Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false,
  });
  
  const propiedades = Object.getOwnPropertyNames(obj);
  console.log(propiedades); // Imprimirá ["a", "c"]
  
//   En este ejemplo, Object.getOwnPropertyNames retorna un array con las propiedades "a" y "c", excluyendo el símbolo "b".

// Object.getOwnPropertySymbols(obj):
// Este método devuelve un array con los símbolos propios de un objeto.

const obj = {
    a: 1,
    [Symbol('b')]: 2,
    [Symbol('c')]: 3,
  };
  
  const simbolos = Object.getOwnPropertySymbols(obj);
  console.log(simbolos); // Imprimirá [Symbol(b), Symbol(c)]
  
//   En este ejemplo, Object.getOwnPropertySymbols retorna un array con los símbolos "b" y "c".

// Object.getOwnPropertyDescriptors(obj):
// Este método devuelve un objeto con descripciones de todas las propiedades (enumerables y no enumerables) de un objeto, incluyendo sus configuraciones (como si son configurables, enumerables y tienen acceso de escritura).

const obj = {
    a: 1,
    [Symbol('b')]: 2,
  };
  
  Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false,
  });
  
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  console.log(descriptors.a); // Imprimirá un objeto con la descripción de 'a'
  console.log(descriptors.c); // Imprimirá un objeto con la descripción de 'c'
  
//   En este ejemplo, Object.getOwnPropertyDescriptors devuelve objetos que describen las propiedades "a" y "c" con sus respectivas configuraciones.

// Estos métodos te permiten obtener información detallada sobre las propiedades de un objeto, lo que puede ser útil en situaciones donde necesitas manipular o inspeccionar objetos de manera más completa.

// Object.defineProperty es un método que se utiliza para definir o modificar las propiedades de un objeto en JavaScript. Específicamente, te permite configurar propiedades de un objeto, incluyendo su valor, enumerabilidad, capacidad de escritura y más.

// Aquí hay un ejemplo de cómo se usa Object.defineProperty para definir una propiedad en un objeto:

const objeto = {};

// Define una propiedad llamada 'nombre' con un valor inicial
Object.defineProperty(objeto, 'nombre', {
  value: 'Juan',
  writable: true, // La propiedad es modificable
  enumerable: true, // La propiedad es iterable en bucles for...in
  configurable: true, // La propiedad es configurable
});

console.log(objeto.nombre); // Imprimirá 'Juan'

// Intenta modificar la propiedad
objeto.nombre = 'Pedro';
console.log(objeto.nombre); // Imprimirá 'Pedro'

// Intenta eliminar la propiedad
delete objeto.nombre;
console.log(objeto.nombre); // Imprimirá 'Pedro' porque la propiedad es configurable

// Redefine la propiedad con configuración diferente
Object.defineProperty(objeto, 'nombre', {
  value: 'Ana',
  writable: false, // La propiedad no es modificable
});

console.log(objeto.nombre); // Imprimirá 'Ana'

// Intenta modificar la propiedad de nuevo
objeto.nombre = 'Marta';
console.log(objeto.nombre); // Imprimirá 'Ana' porque la propiedad no es modificable

// En este ejemplo, primero usamos Object.defineProperty para definir una propiedad "nombre" en el objeto "objeto". Luego, podemos modificar o eliminar la propiedad según las configuraciones que hemos establecido. Finalmente, volvemos a definir la propiedad "nombre" con diferentes configuraciones. Esto ilustra cómo puedes controlar las características de una propiedad en un objeto utilizando Object.defineProperty.