const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: true,
    writable: true,
    configurable: true,
});

// En JavaScript, las propiedades de un objeto pueden tener tres atributos que controlan su comportamiento y manipulación. Estos atributos son writable, enumerable, y configurable. Aquí te explico lo que significan:

// writable es un atributo booleano que determina si una propiedad puede ser modificada o reasignada después de haber sido creada. Si writable es true, la propiedad puede ser modificada; si es false, la propiedad no puede ser modificada.

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
  
//   enumerable es un atributo booleano que determina si una propiedad es iterable en un bucle for...in y si se muestra en ciertos métodos como Object.keys() y JSON.stringify(). Si enumerable es true, la propiedad es visible en estas operaciones; si es false, la propiedad no es visible.

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
  

//   configurable es un atributo booleano que determina si una propiedad puede ser eliminada y si sus atributos (writable, enumerable, y configurable) pueden ser modificados. Si configurable es true, la propiedad puede ser eliminada y sus atributos pueden ser cambiados; si es false, la propiedad no puede ser eliminada y sus atributos no pueden ser modificados.

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
  