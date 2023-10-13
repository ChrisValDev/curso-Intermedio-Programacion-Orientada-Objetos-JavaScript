const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(
// Object.keys(juan), // Este método estático devuelve un array de las propiedades enumerables de un objeto.
// Object.getOwnPropertyNames(juan), // Este método devuelve un array con todas las propiedades (tanto enumerables como no enumerables) de un objeto, excluyendo los símbolos.
// Object.entries(juan), // Devuelve un array de arrays, donde cada subarray contiene una pareja clave-valor correspondiente a las propiedades enumerables del objeto.
// );

console.log(Object.getOwnPropertyDescriptors(juan));