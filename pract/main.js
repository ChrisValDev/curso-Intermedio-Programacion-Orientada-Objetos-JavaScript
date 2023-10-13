//Shallow copy
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
};

const obj2 = {};

for (prop in obj1) {
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);

// Una "Shallow copy" (copia superficial) en JavaScript se refiere a la creación de un nuevo objeto o estructura de datos que es una copia de otro objeto, pero donde solo se duplica la primera capa de propiedades o elementos. Las propiedades u elementos anidados como en el ejemplo anterior son las propiedades d: "d" y e: "e", estas no se copian en profundidad(solo superficialmente), por ello se mantienen como referencias al objeto original. Lo que ocasiona que si modificamos alguna de estas propiedades (d,e) anidadas en el Obj1 se haran los mismos cambios para Obj3 y viceversa.