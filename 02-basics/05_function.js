function sayMyName() {
    console.log("A")
    console.log("n")
    console.log("A")
    console.log("s")
}

// sayMyName()
function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2)

    let result = num1 + num2 
    // console.log("ANAS") // 8
    // return result
    return num1 +   num2
}
  const result = addTwoNumbers(5, 3)
//   console.log("Result:", result) // undefined

function LoginUserMessage(username) {
    if (username === undefined) {
      console.log("Hello please enter the username");
      return;
    }
    return `Welcome back ${username}`
}
// console.log(LoginUserMessage("Anas")); // Welcome back Anas
console.log(LoginUserMessage("anas")); // Welcome back anas