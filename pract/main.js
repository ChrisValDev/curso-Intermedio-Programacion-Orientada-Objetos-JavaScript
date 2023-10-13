//Ejemplo de condicional para extraer datos de una lista(array)

const numeritos = [2,3,45,256,6,3,7,3,76,89,3,5,,1];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log({ index, numerito });
}