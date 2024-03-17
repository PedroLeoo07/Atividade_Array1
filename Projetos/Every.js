//Metodo utilizando o Every

let numero = [10, 24, 9, 0.1];
//Let criada para verificação dos numeros

let MaiorQue0 = numero.every(numero => numero > 0);

console.log(MaiorQue0);
//Se não tiver numeros maiores que 0 essa função será falsa