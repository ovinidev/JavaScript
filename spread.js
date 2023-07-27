const user = {
  name: "Vini",
  age: 21,
  instagram: "vini.13",
  favoriteColor: "pink",
  skills: ["frontend", "react", "git"],
  active: false,
};

// Sempre colocar o spread no começo
const updatedUser = {
  ...user,
  active: true,
};

console.log(updatedUser);
