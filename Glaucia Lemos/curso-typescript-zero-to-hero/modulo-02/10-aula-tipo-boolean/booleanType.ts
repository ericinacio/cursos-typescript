/*
 * arquivo: booleanType.ts
 * data: 04/05/2024
 * author: Eric Inácio <@ericinacio>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01
let taskCompleted: boolean = true;
let taskPending: boolean = false;
console.log(taskCompleted);
console.log(taskPending);

// ==> Exemplo 02
let completed: boolean = false;
if (completed) {
    console.log('Tarefa foi concluída com sucesso!');
} else {
    console.log('Tarefa Pedente!');
}