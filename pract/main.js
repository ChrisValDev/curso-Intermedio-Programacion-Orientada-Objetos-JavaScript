//Ejemplo de condicional para extraer datos de una lista(array)

const numeritos = [2,3,45,256,6,3,7,3,76,89,3,5,1];

function recursiva(numbersArray) {
    if(numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();
        recursiva(numbersArray);
    }
}