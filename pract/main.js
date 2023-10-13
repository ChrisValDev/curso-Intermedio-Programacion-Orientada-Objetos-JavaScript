const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
};

const stringConvertObject = JSON.stringify(obj1);
const obj2 = JSON.parse(stringConvertObject);

// JSON.stringify(objeto) - Esta función toma un objeto JavaScript y lo convierte en una cadena JSON.  
// JSON.parse(objeto) - Esta función toma una cadena JSON y la convierte en un objeto JavaScript.

//Esta es la mejor manera de copiar objetos para no tener la referencia de objetos anidados y las modificaciones que se realicen en las propiedades anidadas no afecten al objeto original (Esto no funciona cuando los objetos contienen metodos).