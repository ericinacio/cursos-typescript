/*
 * arquivo: stringType.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Single Quotes
let fullName: string = 'Eric Inácio';
console.log(fullName);

// ==> Exemplo 02 - Double Quotes
let roleCompany: string = "Programador"

// ==> Exemplo 03 - Back Ticks
let companyName: string = 'Astros Networks'

let employeeData: string = `Seja bem-vindo ${fullName}! Você será ${roleCompany} na empresa ${companyName}`;

console.log(employeeData)