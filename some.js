const iphoneArray = [
  { name: "iPhoneX", price: 5000, volume: 25 },
  { name: "iPhoneXR", price: 4000, volume: 13 },
  { name: "iPhone11", price: 3500, volume: 5 },
  { name: "iPhone12", price: 6000, volume: 12 },
];

const someIphone = iphoneArray.some((iphone) => iphone.volume === 13);

console.log({ someIphone });

const everyIphone = iphoneArray.every((iphone) => iphone.price > 1000);

console.log({ everyIphone });
