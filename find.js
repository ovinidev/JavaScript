const iphoneArray = [
  { name: "iPhoneX", price: 5000, volume: 25 },
  { name: "iPhoneXR", price: 4000, volume: 13 },
  { name: "iPhone11", price: 3500, volume: 5 },
  { name: "iPhone12", price: 6000, volume: 12 },
];

const findIphoneBarato = iphoneArray.find((iphone) => iphone.price < 5000);
const findIphoneCaro = iphoneArray.find((iphone) => iphone.price > 5000);

console.log({ findIphoneBarato });
console.log({ findIphoneCaro });

const findIndex = iphoneArray.findIndex((iphone) => iphone.name === "iPhone12");

console.log({ findIndex });
console.log(iphoneArray[findIndex]);
