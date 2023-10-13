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
    enumerable: false,
    writable: true,
    configurable: true,
});