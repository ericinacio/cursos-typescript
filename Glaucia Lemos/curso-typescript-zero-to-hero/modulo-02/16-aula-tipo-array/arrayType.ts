/*
 * arquivo: arrayType.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
*/

// ==> Exemplo 01 - Uso de Colchetes:
let fruits: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(fruits[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):
let fruitsObj: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(fruitsObj[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'
let languages: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages);
languages.push('Mandarin');
console.log(languages);
languages.push('Italiano');
console.log(languages);

// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
let languages1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(languages1.length)

// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let listNumbers = [0, 1, 2, 3, 4, 5]
listNumbers = [...listNumbers, 6, 7, 8, 9, 10]
console.log(listNumbers)

// ==> Exemplo 06 - Exemplo de Array com laço de iteração
let languagesArray: string[] = new Array('Javascript', 'Python', 'PHP', 'C#')
function functionLanguages(languages:string[]) {
    for (let i = 0; i < languages.length; i++) {
        console.log(languages[i]);
    }
}
functionLanguages(languagesArray)