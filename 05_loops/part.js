const coding  =["js","html","css"]


const value = coding.forEach((item)=>{
    console.log(item)
})

console.log(value)


const myNums = [1,2,3,4,5,6,7,8,9,10]
 

// const newNums = myNums.filter((num) => 4)
// console.log(newNums)
// const newNums = myNums.filter((num) => {
//       return  num > 4
// })

const nemNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        nemNums.push(num)
    }
})
console.log(nemNums); 