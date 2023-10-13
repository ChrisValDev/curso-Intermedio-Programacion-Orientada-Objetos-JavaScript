const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.getOwnPropertyDescriptors(juan)); // Este método devuelve un objeto con descripciones de todas las propiedades (enumerables y no enumerables) de un objeto, incluyendo sus configuraciones (como si son configurables, enumerables y tienen acceso de escritura).

Object.defineProperty(juan, "pruebaNasa", { // Método que se utiliza para definir o modificar las propiedades de un objeto en JavaScript. Específicamente, te permite configurar propiedades de un objeto, incluyendo su valor, enumerabilidad, capacidad de escritura y más.
    value: "extraterrestres",
    enumerable: true,
    writable: true,
});