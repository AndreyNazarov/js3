// const countProps = {
//   name: "Mango",
//   age: 2
// };

// const Props = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500
// };

// const keys = Object.values(countProps);
// console.log(keys.length);

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3



const countProps = function(obj) {
    return Object.values(obj).length;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
