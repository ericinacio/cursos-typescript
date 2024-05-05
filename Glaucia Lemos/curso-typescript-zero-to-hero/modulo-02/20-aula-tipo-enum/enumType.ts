/*
 * arquivo: enumType.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 */

// ==> Exemplo 01: Numeric Enums (Enums Numérico)
enum Languages {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}
console.log(Languages);

// ==> Exemplo 02: String Enums
enum Days {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}
console.log(Days)

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)
/* XXXXXXXX ERRADO XXXXXXXXX
const enum Foods {
    Hamburguer,
    Massa,
    Pizza,
    Torta,
    Churrasco
}
function foods(food: Foods) {
    return `${food} é uma comida muito boa!`;
}
console.log(foods(Foods.Pizza));
console.log(foods(Foods.Churrasco));
console.log(foods(5));
*/
/* VVVVVVVV CERTO VVVVVVVV */
const enum Foods {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco'
}
function readFoods(food: Foods) {
    return `${food} é uma comida muito boa!`;
}
console.log(readFoods(Foods.Pizza));
console.log(readFoods(Foods.Churrasco));
// console.log(foods(5));

// ==> Exemplo 04: Quando usar enum?!
enum Task {
    Todo,
    Progress,
    Done
}
const completedTask = {
    id: 1,
    status: Task.Done,
    description: 'Parabéns! Tarefa concluída com sucesso!',
};
if (completedTask.status === Task.Done) {
    console.log('Enviar um e-mail: Tarefa Concluída!');
}