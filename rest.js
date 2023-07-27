const user = {
  name: "Vini",
  age: 21,
  instagram: "vini.13",
  favoriteColor: "pink",
  skills: ["frontend", "react", "git"],
};

// o rest precisa ser sempre a última variável
const { name, ...rest } = user;

console.log(rest);
