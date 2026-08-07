const user = {
  username: "Anassiddique",
  price: 990,

  wellcomeMessage: function () {
    console.log(`${this.username} , wellcome to website`);
    console.log(this);
  },
};
user.wellcomeMessage();
user.username = "sam"
user.wellcomeMessage()

console.log(this)

function code(){
    let username = "anassiddique"
    console.log(this.username);
}
code()

const code = function () {
  let username = "anas";
  console.log(this.username);
};
code();

const code = () => {
  let username = "anas"
  console.log(this);
}
code();

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))

const addTwo =(num1, num2)=> num1 + num2 

const addTwo = (num1, num2) => ({username:"anas"})

console.log(addTwo(3,4))

