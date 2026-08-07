function calculateCartPrice(  val1, val2, ...num1){
    return num1 // Assuming 8% tax rate 
}
console.log(calculateCartPrice(100,200,300,30000)) // 108

const user = {
    username: "Anas",   
    price: 100,
}

function handelObject(anyobj) {
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
// handelObject(user) // username is Anas and price is 100
handelObject({
    username: "Anas",
    price: 100,
}) // username is Anas and price is 100

const myNewArray =[1,2,3,4,5]
 function returnsecondvalue(anyarray) {
    return anyarray[1]
 }
//  console.log(returnsecondvalue(myNewArray)) // 2
 console.log(returnsecondvalue([1,2,3,4,5])) 

