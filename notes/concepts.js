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

const persona = { 
    nombre: 'Juan', 
    edad: 30 
};
Object.freeze(persona); // Congelamos el objeto

// Intentemos modificar una propiedad existente
persona.nombre = 'Pedro'; // No se permitirá la modificación
console.log(persona); // Imprimirá { nombre: 'Juan', edad: 30 }

// Intentemos agregar una nueva propiedad
persona.ciudad = 'Barcelona';
console.log(persona); // { nombre: 'Pedro', edad: 30 }, no se agrega la propiedad "ciudad"
  
// Intentemos eliminar una propiedad existente
delete persona.edad;
console.log(persona); // { nombre: 'Pedro' }, no se elimina la propiedad "edad"

// Object.seal() es un método en JavaScript que se utiliza para "sellar" un objeto, lo que significa que previene la adición de nuevas propiedades y evita la eliminación de propiedades existentes en el objeto. Sin embargo, las propiedades existentes aún pueden ser modificadas.

// Cuando sellas un objeto usando Object.seal(), puedes cambiar los valores de las propiedades existentes, pero no puedes agregar nuevas propiedades ni eliminar las propiedades existentes. Esto hace que el objeto sea "cerrado" para cambios en su estructura, pero aún puedes actualizar sus valores.

// Aquí tienes un ejemplo de cómo funciona Object.seal():

const persona = {
    nombre: 'Juan',
    edad: 30
  };
  
  Object.seal(persona); // Sellamos el objeto
  
  // Intentemos modificar una propiedad existente
  persona.nombre = 'Pedro';
  console.log(persona); // { nombre: 'Pedro', edad: 30 }
  
  // Intentemos agregar una nueva propiedad
  persona.ciudad = 'Barcelona';
  console.log(persona); // { nombre: 'Pedro', edad: 30 }, no se agrega la propiedad "ciudad"
  
  // Intentemos eliminar una propiedad existente
  delete persona.edad;
  console.log(persona); // { nombre: 'Pedro' }, no se elimina la propiedad "edad"

//   En este ejemplo, después de sellar el objeto "persona" con Object.seal(persona), podemos cambiar el valor de la propiedad existente "nombre" pero no podemos agregar nuevas propiedades ni eliminar propiedades existentes como "ciudad" o "edad". Las operaciones para agregar o eliminar propiedades no tienen efecto.

// Object.seal() es útil cuando deseas asegurarte de que un objeto mantenga una estructura fija y que no se le puedan agregar nuevas propiedades de manera accidental, lo que puede ayudar a prevenir errores inesperados en tu código.
  

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

//Cómo funciona la memoria en JavaScript

// La memoria Stack y la memoria Heap son dos áreas fundamentales en la gestión de la memoria en lenguajes de programación, incluyendo JavaScript. Cada una tiene un propósito diferente y almacena tipos de datos de manera distinta:

// Memoria Stack (Pila):

// Almacenamiento de Datos: La memoria Stack almacena principalmente datos relacionados con la ejecución de funciones y la gestión del flujo de control del programa, como variables locales y referencias a funciones.

// Operaciones LIFO: La memoria Stack sigue el principio de LIFO (Last In, First Out), lo que significa que el último elemento agregado a la pila es el primero en ser eliminado. Cuando una función se llama, un nuevo contexto de ejecución se coloca en la pila. Cuando la función termina, su contexto se elimina de la pila.

// Limitada y de Tamaño Fijo: La memoria Stack tiene un tamaño fijo y limitado, y su capacidad depende de la implementación y configuración del entorno de ejecución de JavaScript. Esto significa que puede llenarse si se anidan muchas funciones o si se crean grandes estructuras de datos en la memoria Stack.

// Velocidad: La memoria Stack es más rápida en términos de acceso y gestión de memoria, ya que las operaciones de apilado y desapilado son simples.

// Almacenamiento de Datos Primitivos: En JavaScript, las variables primitivas (como números, cadenas, booleanos) se almacenan en la memoria Stack.

// Memoria Heap:

// Almacenamiento de Objetos y Datos Dinámicos: La memoria Heap se utiliza para almacenar objetos y datos dinámicos que no se ajustan al tamaño fijo de la memoria Stack. Los objetos, arrays y otros tipos de datos más complejos se almacenan en la memoria Heap.

// Gestión Manual de la Memoria: En JavaScript, no es necesario administrar manualmente la memoria en la memoria Heap. El motor JavaScript se encarga de la asignación y liberación de memoria en esta área.

// Acceso más Lento: El acceso a datos almacenados en la memoria Heap es generalmente más lento en comparación con la memoria Stack, ya que implica búsqueda y administración más complejas.

// Almacenamiento de Datos de Referencia: En JavaScript, las variables de referencia (como objetos y funciones) se almacenan en la memoria Heap. Esto incluye objetos creados con new, matrices, y otros objetos más complejos.

// En resumen, la memoria Stack se utiliza para gestionar la ejecución de funciones y las variables locales, mientras que la memoria Heap se utiliza para almacenar datos más grandes y complejos, como objetos y estructuras de datos dinámicas. Comprender la diferencia entre estas dos áreas es importante para optimizar el rendimiento y evitar problemas de gestión de memoria en tus aplicaciones JavaScript.

// Object.create() es un método en JavaScript que se utiliza para crear un nuevo objeto y establecer su prototipo a otro objeto existente. Esto permite crear un objeto que hereda propiedades y métodos del objeto prototipo. La sintaxis general es la siguiente:


Object.create(proto[, propertiesObject])

// proto: El objeto que será el prototipo del nuevo objeto.
// propertiesObject (opcional): Un objeto que define las propiedades adicionales para el nuevo objeto. Este objeto puede contener configuraciones para las propiedades, como value, writable, enumerable, y configurable.
// Aquí hay un ejemplo de cómo usar Object.create():


// Definimos un objeto prototipo
const personaPrototipo = {
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
};

// Creamos un nuevo objeto que hereda del prototipo
const juan = Object.create(personaPrototipo);

// Agregamos propiedades al nuevo objeto
juan.nombre = 'Juan';
juan.edad = 30;

// Llamamos al método del prototipo
juan.saludar(); // Imprimirá "Hola, mi nombre es Juan y tengo 30 años."

// En este ejemplo, juan es un nuevo objeto que se ha creado con Object.create(personaPrototipo). Esto establece personaPrototipo como el prototipo de juan, lo que significa que juan hereda el método saludar() del prototipo. Luego, agregamos propiedades nombre y edad específicas para juan.

// Object.create() es útil para implementar la herencia en JavaScript, ya que te permite crear objetos que comparten características de un prototipo común. Puedes crear varios objetos con el mismo prototipo y luego personalizarlos agregando propiedades específicas para cada objeto. Esto es una forma alternativa de crear objetos en lugar de utilizar el constructor de funciones o la clase.

//Shallow copy 

// Una "shallow copy" (copia superficial) en JavaScript se refiere a la creación de un nuevo objeto o estructura de datos que es una copia de otro objeto, pero donde solo se duplica la primera capa de propiedades o elementos. Las propiedades u elementos anidados no se copian en profundidad, sino que se mantienen como referencias al objeto original. En otras palabras, solo se copian las referencias a los objetos anidados en lugar de copiar los objetos completos.

// Para realizar una shallow copy en JavaScript, puedes utilizar diferentes enfoques, como el operador de propagación (...), Object.assign(), o simplemente copiar propiedades manualmente. Aquí tienes un ejemplo de cómo se hace una shallow copy de un objeto:

const original = {
    a: 1,
    b: { c: 2 }
  };
  
  // Usando el operador de propagación
  const shallowCopy1 = { ...original };
  shallowCopy1.b.c = 2;
  
  // Usando Object.assign
  const shallowCopy2 = Object.assign({}, original);
  shallowCopy2.b.c = 2;
  
  console.log(original);      // { a: 1, b: { c: 2 } }
  console.log(shallowCopy1);  // { a: 1, b: { c: 2 } }
  console.log(shallowCopy2);  // { a: 1, b: { c: 2 } }
  
// En este ejemplo, original es un objeto con una propiedad b que es otro objeto anidado. Luego, creamos dos "shallow copies" de original, shallowCopy1 y shallowCopy2. Cuando modificamos la propiedad b.c en shallowCopy1 y shallowCopy2, la propiedad correspondiente en original también se modifica, ya que ambas copias hacen referencia al mismo objeto anidado.

// Ten en cuenta que si necesitas copiar un objeto de manera profunda (lo que implica copiar todas las propiedades y objetos anidados de manera recursiva), debes utilizar técnicas más avanzadas, como la función JSON.parse(JSON.stringify(obj)), bibliotecas de clonación profunda, o implementar tu propia lógica de clonación profunda.

// JSON.parse() y JSON.stringify() 

// son dos funciones en JavaScript que se utilizan para convertir entre objetos JavaScript y representaciones de texto en formato JSON (JavaScript Object Notation). Aquí te muestro cómo usar cada una de ellas:

// JSON.stringify():

// Esta función toma un objeto JavaScript y lo convierte en una cadena JSON. Se utiliza principalmente cuando deseas enviar datos a través de una red o almacenar datos en un archivo. Aquí tienes un ejemplo de cómo usarlo:

const objeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Barcelona"
};

const objetoJSON = JSON.stringify(objeto);

console.log(objetoJSON);
// Imprimirá '{"nombre":"Juan","edad":30,"ciudad":"Barcelona"}'

// JSON.stringify() convierte el objeto objeto en una cadena JSON válida.

// JSON.parse():

// Esta función toma una cadena JSON y la convierte en un objeto JavaScript. Se utiliza principalmente cuando recibes datos en formato JSON y deseas trabajar con ellos como objetos JavaScript. Aquí tienes un ejemplo de cómo usarlo:


const cadenaJSON = '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}';

const objeto = JSON.parse(cadenaJSON);

console.log(objeto);
// Imprimirá { nombre: 'Ana', edad: 25, ciudad: 'Madrid' }

// JSON.parse() toma la cadena JSON cadenaJSON y la convierte en un objeto JavaScript.

// Estas dos funciones son muy útiles para la serialización y deserialización de datos cuando trabajas con APIs, almacenamiento de datos o comunicación entre clientes y servidores. Te permiten intercambiar datos en un formato estándar y luego trabajar con ellos en JavaScript como objetos normales.

// Qué es recursividad

// La recursividad en JavaScript se refiere a la capacidad de una función para llamarse a sí misma dentro de su propia definición. Es un concepto común en programación en el que una función resuelve un problema dividiéndolo en subproblemas más pequeños y resolviéndolos de manera recursiva. En otras palabras, una función recursiva es una función que se llama a sí misma para resolver una tarea o alcanzar una condición de parada.

// Un ejemplo clásico de recursión es el cálculo del factorial de un número. Aquí tienes una función recursiva para calcular el factorial de un número en JavaScript:

function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
      return 1;
    }
    // Caso recursivo: llamamos a la función con un valor más pequeño
    else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Resultado: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
  
//   En este ejemplo, la función factorial se llama a sí misma con un valor más pequeño en cada iteración hasta que se alcanza el caso base (n igual a 0). La recursividad es una técnica poderosa en programación que se utiliza para resolver problemas que se pueden descomponer en casos más simples. Sin embargo, es importante asegurarse de que cada llamada recursiva se acerque al caso base para evitar bucles infinitos.

// La recursividad se utiliza en una variedad de algoritmos y enfoques de resolución de problemas, y puede ser especialmente útil para abordar problemas complejos y estructuras de datos, como árboles y grafos.


// Deep copy con recursividad

// Un "deep copy" (copia profunda) con recursividad en JavaScript se refiere a una copia de un objeto que incluye todas las propiedades del objeto original y todas las propiedades anidadas, creando una copia independiente de todos los objetos anidados en lugar de solo copiar las referencias. Esto implica copiar cada nivel de propiedades y objetos anidados de manera recursiva hasta que se haya creado una copia completa del objeto original.

// Dado que en JavaScript, los objetos pueden tener anidaciones de objetos dentro de objetos y así sucesivamente, una copia profunda con recursividad asegura que se dupliquen todos los objetos y estructuras anidadas de manera completa.

// A continuación, se muestra un ejemplo de cómo realizar una copia profunda con recursividad en JavaScript:

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Si no es un objeto, simplemente devuelve el valor
    }
  
    if (Array.isArray(obj)) {
      // Si es un array, crea una copia vacía y copia cada elemento de manera recursiva
      const copia = [];
      for (let i = 0; i < obj.length; i++) {
        copia[i] = deepCopy(obj[i]);
      }
      return copia;
    }
  
    // Si es un objeto, crea un objeto vacío y copia cada propiedad de manera recursiva
    const copia = {};
    for (const clave in obj) {
      if (obj.hasOwnProperty(clave)) {
        copia[clave] = deepCopy(obj[clave]);
      }
    }
    return copia;
  }
  
  const objetoOriginal = {
    a: 1,
    b: [2, 3, 4],
    c: { d: 5, e: { f: 6 } }
  };
  
  const copiaProfunda = deepCopy(objetoOriginal);
  
  // Modificamos la copia profunda para demostrar su independencia
  copiaProfunda.b[0] = 7;
  
  console.log(objetoOriginal);
  console.log(copiaProfunda);

//   En este ejemplo, la función deepCopy toma un objeto y realiza una copia completa con recursividad, incluyendo copias de todos los objetos anidados y estructuras de datos. Esto asegura que cualquier modificación en la copia profunda no afecte al objeto original ni a sus estructuras anidadas.

// Object.isSealed() es un método en JavaScript que se utiliza para determinar si un objeto está "sellado". Un objeto sellado es un objeto en el cual no se pueden agregar nuevas propiedades, ni eliminar propiedades existentes, aunque aún se pueden modificar los valores de las propiedades existentes.

// La sintaxis de Object.isSealed() es la siguiente:

Object.isSealed(obj)

// Donde obj es el objeto que se verifica para determinar si está sellado o no.

// Este método devuelve true si el objeto obj está sellado y false si no lo está.

// Aquí hay un ejemplo de cómo se utiliza Object.isSealed():

const persona = {
    nombre: 'Juan',
    edad: 30
  };
  
  // Sellamos el objeto
  Object.seal(persona);
  
  console.log(Object.isSealed(persona)); // true, el objeto está sellado
  
  // Intentamos agregar una nueva propiedad
  persona.ciudad = 'Barcelona';
  
  console.log(Object.isSealed(persona)); // true, no se puede agregar una nueva propiedad
  
  // Intentamos eliminar una propiedad existente
  delete persona.edad;
  
  console.log(Object.isSealed(persona)); // true, no se puede eliminar una propiedad existente
  
  // Modificamos una propiedad existente
  persona.nombre = 'Pedro';
  
  console.log(persona); // { nombre: 'Pedro', edad: 30 }
  
// En este ejemplo, después de sellar el objeto "persona" con Object.seal(persona), Object.isSealed(persona) devuelve true, lo que indica que el objeto está sellado. Luego, intentamos agregar una nueva propiedad y eliminar una propiedad existente, pero ambas operaciones no tienen efecto. Sin embargo, todavía podemos modificar el valor de una propiedad existente, como se muestra al modificar la propiedad "nombre".


// Object.isFrozen() es un método en JavaScript que se utiliza para determinar si un objeto está "congelado". Un objeto congelado es un objeto en el que no se pueden agregar, eliminar ni modificar propiedades existentes. Es una restricción más fuerte que la que ofrece Object.seal().

// La sintaxis de Object.isFrozen() es la siguiente:

Object.isFrozen(obj)

// Donde obj es el objeto que se verifica para determinar si está congelado o no.

// Este método devuelve true si el objeto obj está congelado y false si no lo está.

// Aquí hay un ejemplo de cómo se utiliza Object.isFrozen():

const persona = {
    nombre: 'Juan',
    edad: 30
  };
  
  // Congelamos el objeto
  Object.freeze(persona);
  
  console.log(Object.isFrozen(persona)); // true, el objeto está congelado
  
  // Intentamos agregar una nueva propiedad
  persona.ciudad = 'Barcelona';
  
  console.log(Object.isFrozen(persona)); // true, no se puede agregar una nueva propiedad
  
  // Intentamos eliminar una propiedad existente
  delete persona.edad;
  
  console.log(Object.isFrozen(persona)); // true, no se puede eliminar una propiedad existente
  
  // Modificamos una propiedad existente
  persona.nombre = 'Pedro';
  
  console.log(Object.isFrozen(persona)); // true, no se pueden modificar propiedades existentes
  
// En este ejemplo, después de congelar el objeto "persona" con Object.freeze(persona), Object.isFrozen(persona) devuelve true, lo que indica que el objeto está congelado. Como resultado, no se pueden realizar ninguna de las siguientes acciones: agregar nuevas propiedades, eliminar propiedades existentes ni modificar el valor de propiedades existentes en el objeto. La congelación proporciona una inmutabilidad completa al objeto.


// Patron RORO

// El patrón RORO (Reveal-Only/Reveal-Once) en JavaScript es una técnica que se utiliza para controlar el acceso a propiedades de un objeto, permitiendo que estas propiedades solo se puedan revelar una vez o sean de solo lectura después de ser establecidas. Este patrón es útil en situaciones en las que se desea garantizar que ciertas propiedades no se puedan modificar una vez que se han establecido.

// El patrón RORO se implementa generalmente utilizando el concepto de propiedades getter (acceso) y setter (establecimiento) en objetos en JavaScript. Aquí tienes un ejemplo de cómo se puede implementar el patrón RORO:

const objetoRORO = (function() {
    let propiedadPrivada;
  
    return {
      setPropiedad: function(valor) {
        if (typeof propiedadPrivada === 'undefined') {
          propiedadPrivada = valor;
        } else {
          console.log('La propiedad ya ha sido revelada y no se puede modificar.');
        }
      },
      getPropiedad: function() {
        return propiedadPrivada;
      }
    };
  })();
  
  objetoRORO.setPropiedad(42); // Establece la propiedad
  console.log(objetoRORO.getPropiedad()); // Obtiene la propiedad (42)
  
  objetoRORO.setPropiedad(99); // Intenta modificar la propiedad
  console.log(objetoRORO.getPropiedad()); // La propiedad no cambia y se muestra el mensaje de error


// En este ejemplo, objetoRORO es un objeto que utiliza el patrón RORO. La propiedad propiedadPrivada se puede establecer una sola vez utilizando el método setPropiedad(), y una vez que se establece, no se puede modificar. La propiedad solo se puede obtener con el método getPropiedad().

// El patrón RORO es útil en situaciones en las que se necesita garantizar que ciertas propiedades de un objeto no se cambien después de establecerse. Esto puede ser especialmente útil en escenarios en los que la inmutabilidad es importante para mantener la integridad de los datos.


// Duck typing

// El duck typing es un concepto en programación que se refiere a la evaluación de un objeto por su comportamiento y capacidad en lugar de por su tipo o clase específica. La idea detrás del duck typing es que "si parece un pato, nada como un pato y grazna como un pato, entonces es un pato". En otros términos, en lugar de verificar explícitamente el tipo de un objeto, se verifica si el objeto puede realizar las acciones necesarias.

// En JavaScript, que es un lenguaje de programación de tipado dinámico y débilmente tipado, el duck typing es común. No se requiere una declaración de tipo o una interfaz específica para determinar si un objeto se puede utilizar de cierta manera. En cambio, se comprueba si el objeto tiene las propiedades y los métodos necesarios para realizar una tarea específica.

// Un ejemplo típico de duck typing en JavaScript es el uso de un bucle for...of para iterar sobre elementos de una colección:

const array = [1, 2, 3];

for (const elemento of array) {
  console.log(elemento);
}

// En este caso, no necesitas preocuparte por el tipo específico de array, siempre y cuando tenga una estructura iterable, lo que significa que se puede recorrer con un bucle for...of.

// El duck typing promueve la flexibilidad y la reutilización de código, ya que te permite trabajar con objetos que no necesariamente comparten una jerarquía de clases o un tipo común, pero que pueden realizar las mismas acciones. Sin embargo, debes ser consciente de que esto también puede llevar a errores si asumes que un objeto tiene ciertas propiedades o métodos sin verificarlos previamente. Por lo tanto, es importante realizar comprobaciones adecuadas para garantizar el comportamiento deseado.

//Atributos y métodos privados en prototipos

// En JavaScript, no existe una verdadera implementación de atributos y métodos privados como en algunos otros lenguajes de programación, como Java o C#. Sin embargo, puedes simular atributos y métodos privados utilizando convenciones de nomenclatura y ámbitos de función. Aquí hay un ejemplo de cómo hacerlo:

// Atributos privados:
// Puedes simular atributos privados utilizando una convención de nomenclatura que indique que un atributo debe ser tratado como privado. Por ejemplo, puedes usar un guion bajo al comienzo del nombre del atributo para indicar que no debe ser accedido directamente desde fuera del objeto. Aunque esto no impedirá el acceso directo, es una señal para otros desarrolladores de que no deben hacerlo.

function MiClase() {
    var _atributoPrivado = 10; // Atributo privado
    this.getAtributoPrivado = function() {
        return _atributoPrivado;
    };
}

var instancia = new MiClase();
console.log(instancia.getAtributoPrivado()); // Acceder al atributo privado

// Métodos privados:
// Puedes simular métodos privados de manera similar, definiendo funciones dentro del constructor o método que no son accesibles desde fuera del objeto.

function MiClase() {
    var _atributo = 10;

    function _metodoPrivado() {
        return _atributo * 2;
    }

    this.metodoPublico = function() {
        return _metodoPrivado();
    };
}

var instancia = new MiClase();
console.log(instancia.metodoPublico()); // Acceder al método privado


// En ambos ejemplos, los atributos y métodos que comienzan con un guion bajo son considerados convencionalmente privados, pero aún pueden ser accedidos desde fuera del objeto si alguien lo intenta. No obstante, esta convención ayuda a indicar que no se deben usar directamente desde fuera y fomenta el encapsulamiento.

// Ten en cuenta que a partir de ES6 (ECMAScript 2015), se introdujeron clases en JavaScript, que ofrecen una mejor forma de encapsulación y acceso a atributos y métodos privados utilizando el modificador #, pero esto aún no es ampliamente compatible en todos los navegadores y entornos.

// En JavaScript, las propiedades de un objeto pueden tener tres atributos que controlan su comportamiento y manipulación. Estos atributos son writable, enumerable, y configurable. Aquí te explico lo que significan:

// writable es un atributo booleano que determina si una propiedad puede ser modificada o reasignada después de haber sido creada. Si writable es true, la propiedad puede ser modificada; si es false, la propiedad no puede ser modificada.
// Ejemplo:

const objeto = {
  propiedad1: 42
};

// Puedes modificar la propiedad1 si writable es true
objeto.propiedad1 = 50; // Esto es válido

// Pero si writable es false
Object.defineProperty(objeto, 'propiedad2', {
  value: 100,
  writable: false
});

objeto.propiedad2 = 200; // Esto lanzará un error en modo estricto

// enumerable es un atributo booleano que determina si una propiedad es iterable en un bucle for...in y si se muestra en ciertos métodos como Object.keys() y JSON.stringify(). Si enumerable es true, la propiedad es visible en estas operaciones; si es false, la propiedad no es visible.

const objeto = {
  propiedad1: 42,
  propiedad2: 'Hola',
};

Object.defineProperty(objeto, 'propiedad3', {
  value: true,
  enumerable: false
});

for (const key in objeto) {
  console.log(key); // Solo imprimirá 'propiedad1' y 'propiedad2'
}

// configurable es un atributo booleano que determina si una propiedad puede ser eliminada y si sus atributos (writable, enumerable, y configurable) pueden ser modificados. Si configurable es true, la propiedad puede ser eliminada y sus atributos pueden ser cambiados; si es false, la propiedad no puede ser eliminada y sus atributos no pueden ser modificados.
// Ejemplo:

const objeto = {
  propiedad1: 42
};

Object.defineProperty(objeto, 'propiedad2', {
  value: 'Hola',
  configurable: false
});

delete objeto.propiedad1; // Esto está permitido
delete objeto.propiedad2; // Esto lanzará un error en modo estricto

Object.defineProperty(objeto, 'propiedad2', {
  enumerable: true
}); // Esto lanzará un error porque configurable es false
