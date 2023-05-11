//ex 1
let array = [100, 2, 45, 65, 98, 1, 0, 9];
let newArray = array.map(c => c * 100);
console.log(array);
console.log(newArray);
//ex 2
let object = ['Artem Hi!', 'I intrested to football!)','I really like it ^^', 'I plays in game Food Street :)'];
let newObj = object.map(e => e.length);
console.log(object);
console.log(newObj);
//ex 3
let three = [100, 20, 45, 685, 98, 109, 0, 99, 0, 1];
let newThree = three.filter(function(a) {
  if (a >= 100){
     return true;
  } 
  else {
    return false;
  }
})
console.log(three);
console.log(newThree);





// let hiAndBay = {
//     one: function(){
//     console.log("Привіт, друже! :)")
// },
//     two: function(){
//         console.log("ПОКА! :(")
//     }
// }
// hiAndBay.one();
// hiAndBay.two();

// let array = ['Artem', 'Vitalik', 'Danya'];

// let newArray = array.map(function(e){
//     let c = `Hi, ${e}!`;
//     return c;
// })
// console.log(array);
// console.log(newArray)

// let products = [
//   {
//     name: "IPhone 11",
//     price: 700,
//     rating: 4.7,
//   },
//   {
//     name: "IPhone 12",
//     price: 950,
//     rating: 4.9,
//   },
//   {
//     name: "TV",
//     price: 1000,
//     rating: 3.3,
//   },
//   {
//     name: "Player",
//     price: 200,
//     rating: 4.4,
//   },
//   {
//     name: "Airpods",
//     price: 120,
//     rating: 3.0,
//   },
//   {
//     name: "Apple Watch",
//     price: 450,
//     rating: 3.1,
//   },
//   {
//     name: "Playstation",
//     price: 420,
//     rating: 4.9,
//   },
// ];

// let newObj = products.map(function(e) {
//     let lets = e.price * 10 / 100;
//     let twos = e.price - lets;
//     return twos;
// });
// console.log(newObj)
