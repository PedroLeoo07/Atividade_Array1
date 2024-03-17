//Metodo escolhido Reduce

let palavras = ['Eu,', 'Leonardo', 'amo', 'tanto', 'ela', ];
//Let palavras, ela vai ser responsavel por guardas as frases


let frase = palavras.reduce((acumulador, palavra) => acumulador + ' ' + palavra);
//Essa parte do codigo vai ser utilizado o reduce, ele vai ser responsavel por juntas as palavras

console.log(frase);
//Vericação das palavras formação das frases