//Metodo concat
let a = [1,2,3,];
let b = [6,7,8,];

let numbers = a.concat(b);
console.log(numbers);
// Esse metodo ele faz com que os algoritimos fiquem em ordem tanto faz a sua orde, com o metodo concat ele fica na ordem
let letras = ["a", "b", "c"];

let alfaNumerico = letras.concat(1, [2, 3]);

console.log(alfaNumerico);
// resulta em ['a', 'b', 'c' , 1, 2, 3]