/*
 * arquivo: tupleType.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 */

// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let person: [string, string, number];
person = ['Eric Inácio', 'Programador Full-Stack', 34];
// person = ['Programador', 34, 'Eric Inácio'];
console.log(person);

// ==> Exemplo 02 - Acessando o valor da Tupla
let person1: [string, string, number];
person1 = ['Eric Inácio', 'Programador Full-Stack', 34];
console.log(person1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let person2: [name: string, position: string, age: number] = ['Eric Inácio', 'Programador Full-Stack', 34];
console.log(person2);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listFruits: [string, ... string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']; // Todos os restantes os itens são strings
console.log(... listFruits)

//==> Exemplo 05 - Lista Heterogênea de Tupla
let listFruits2: [number, boolean, ...string[]] = [5, true, ...listFruits]
console.log(listFruits2)

// ==> Exemplo 06 - Uso de função com Tuplas
function listPeople(names: string[], ages: number[]) {
    return [...names, ...ages];
}
let result = listPeople(['Eric', 'Carlos'], [20, 25])
console.log(result)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função
type Name =
        |    [firstName: string, nickName: string]
        |    [firstName: string, middleName: string, nickName: string]
function createPerson(... name: Name) {
    return [... name];
}
console.log(createPerson('Eric', 'Inácio'))
console.log(createPerson('Eric', 'Eduardo', 'Inácio'))