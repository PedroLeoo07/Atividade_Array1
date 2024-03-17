let carro = ['Pagani', 'Celta', 'Porsche', 'skyline'];
//Let criado para criação de carros

carro.sort();

console.log(carro);
//Após a verficação o sort irá colocar em ordem alfabética

//Outro modelo

let carros = [
    { name: 'Gol', valor: 28000 },
    { name: 'Pagani', valor: 10000000 },
    { name: 'Skyline', valor: 360000 }
];
carros.sort((a, b) => a.valor - b.valor)
//Nessa parte o sort vai comparar qual carro é mais barato
console.log(carros);