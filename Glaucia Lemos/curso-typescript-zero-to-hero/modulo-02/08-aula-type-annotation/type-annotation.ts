/* eslint-disable prettier/prettier */
/*
 * arquivo: typeAnnotation.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Variáveis [Type Annotations]
let namePerson: string = 'Eric Inácio'
console.log(namePerson)

// ==> Arrays [Type Annotations]
let animals: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
console.log(animals);

// ==> Objetos [Type Annotations]
let cars: {
    name: string;
    year: number;
    price: number
}
cars = { name:'Toyota Yaris Sedan XS' , year: 2019, price: 80.000 }
console.log(cars)

// ==> Functions [Type Annotations]
function multiplyNumbers(num1: number, num2: number) {
    return num1 * num2
}

console.log(multiplyNumbers(5,10))