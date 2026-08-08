const userEmail = []

if (userEmail){
    console.log(" got user email")
} else{
    console.log("dont have user email")
}

// flasy valuse/

// false
// 0
// -0
// bigint 0n 
// ""
// null
// undefined
// nan
// ---------------------------------------------------  
//truthy valuse
// "0"
// 'false'
// ""
// {}
// []
// function {}()


if (userEmail.length === 0){
    console.log("aryy is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}



// nulish coalescing prater (??) : null and undefiend

let val1;
val1 = 5 ?? 10
val1 = null ?? 10


console.log(val1)
