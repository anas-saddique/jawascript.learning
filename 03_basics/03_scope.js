// let a = 10
// const b= 20
// var c = 30
let a = 200

if (true) {
    let a = 10
    const b = 20 
    // var c = 30
    console.log("  INNER: " ,a)
}

for (let i = 0; i < 5; i++) {
    console.log("  INNER: " ,i)
}

console.log(a) // 200
// console.log(b) // 20 
// console.log(c)          