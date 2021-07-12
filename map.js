// map sempre retorna um array com a mesma quantidade de elementos.
// retornar o obj com um obj diferente

// Dobrando os números

const numeros = [6, 10, 30, 90, 70, 50, 20];

const numerosDobro = numeros.map(function(obj, indice, array){
  return obj * 2
})

console.log(numerosDobro);



// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto



const pessoas = [
  { name: "Fill", age: 62 },
  { name: "John", age: 12 },
  { name: "Ralph", age: 52 },
  { name: "Jake", age: 40 },
  { name: "Tay", age: 19 },
  { name: "Dac", age: 60 },
];

const nomes = pessoas.map(obj => obj.name);

console.log(nomes);

const onlyIdade = pessoas.map(obj => ({ age: obj.age }));

console.log(onlyIdade);

const addId = pessoas.map((obj, indice) => {
  obj.id = (indice + 1) * 1000;
  return obj;
});

console.log(addId);