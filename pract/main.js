const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};


Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: true,
    writable: true,
    configurable: true,
});


//Podemos decir que freeze y seal modifican "descriptores de propiedad" para las propiedades del objeto completo.

// Object.freeze(objeto);

// enumerable: true,
// writable: false,
// configurable: false,

// Object.seal(objeto);

// enumerable: true,
// writable: true,
// configurable: false,