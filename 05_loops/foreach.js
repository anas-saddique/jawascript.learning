const coding = ["js","python","c++",]

coding.forEach( function (val){
    // console.log(val);
})

coding.forEach((item) => {
    // console.log (item)
})

function PrintMe (item){
    console.log(item)
}

// coding.forEach(PrintMe)

coding.forEach((item,index,arr) => {
    //  console.log(item,index,arr)
})

const myCoding = [
    {
        languageName:"jawascript"
      
    },
    {
        languageName:"jawascript"
   
    },
    {
        languageName:"jawascript"
       
    },
]
myCoding.forEach((item)  => {
    console.log(item.languageName)
})