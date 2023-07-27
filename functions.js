// A principal diferença de function para arrow function é o this.
function normalFunction() {
  this.name = "Vini";
}

console.log(new normalFunction());

const arrowFunction = () => {};

console.log(arrowFunction);

function soma(...argumentos) {
  console.log(argumentos);
}

soma(1, 2, 3, 5);
