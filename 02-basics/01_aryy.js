const myArr = [1, 2, 3, 4, 5];
const myIdol= ["Rock","Anas"]

const myArr2 = new Array(6, 7, 8, 9, 10);
console.log(myArr[0]);


myArr.push(6);
myArr.push(7);
myArr.pop()

myArr.unshift(9);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.includes(3));

console.log(myArr);                                           

const newArr =myArr.join();

console.log(newArr);
console.log(typeof newArr);