const user = {
  name: "Vini",
  age: 21,
  instagram: "vini.13",
  favoriteColor: "pink",
};

const { name, favoriteColor } = user;

console.log(name, favoriteColor);

const user2 = ["Vini", 21];

const [firstName, age] = user2;

console.log(firstName, age);
