// map sempre retorna um array com a mesma quantidade de elementos.
// retornar o obj com um obj diferente

// Dobre os números

const numeros = [5, 50, 80, 1, 6, 5, 4, 9, 6, 10, 30, 90, 70, 50, 20];

const numerosDobro = numeros.map((obj, indice, array) => obj * 2
);

console.log(numerosDobro);



// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Vinia", idade: 12 },
  { nome: "Ralph", idade: 52 },
  { nome: "Messiano", idade: 40 },
  { nome: "Taylera", idade: 19 },
  { nome: "Drugsysh", idade: 60 },
];

const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);

const onlyIdade = pessoas.map(obj => ({ idade: obj.idade }));

console.log(onlyIdade);

const addId = pessoas.map((obj, indice) => {
  obj.id = (indice + 1) * 1000;
  return obj;
});

console.log(addId);