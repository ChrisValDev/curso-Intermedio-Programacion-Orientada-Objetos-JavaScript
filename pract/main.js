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

// En JavaScript, las "keys" se refieren a los nombres de las propiedades de un objeto. Cada propiedad de un objeto está compuesta por una clave (key) y un valor. Las "keys" son esenciales para acceder y manipular los valores asociados en un objeto. Puedes pensar en ellas como los nombres de las variables que almacenan datos en el objeto. Las "keys" también se conocen comúnmente como nombres de propiedades.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ocupacion: 'Programador'
  };

//   En este objeto persona, las "keys" son "nombre", "edad" y "ocupacion". Cada una de estas "keys" está asociada a un valor específico. Por ejemplo, persona.nombre te daría acceso al valor "Juan", persona.edad te daría acceso al valor 30 y persona.ocupacion te daría acceso al valor "Programador".