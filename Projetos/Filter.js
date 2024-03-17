let numeros = [21, 12, 333, 22, 52, 40, 70, 41, 97, 99];
//let criado para identificação de números

let Par = numeros.filter(numero => numero % 2 === 0);
//esse outro let vai fazer a verificação dos números divididos por 2, os números que o resultado for 0 será par

console.log(Par)

const inventory = [
    { name: "maças", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result = inventory.find((fruit) => fruit.name === "cherries");
  
  console.log(result); // { name: 'cherries', quantity: 5 }
  