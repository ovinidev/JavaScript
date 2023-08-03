const timeOut = (value) => {
  setTimeout(() => {
    console.log("Olá");
  }, value);
};

Promise.all([
  timeOut(1000),
  timeOut(2000),
  timeOut(3000),
  timeOut(4000),
  timeOut(5000),
]).then((result) => console.log(result));
