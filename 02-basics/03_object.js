
const mySym=Symbol("key1");


const Jsuser = {
 "full name": "Anas",
  age: 20,
  [mySym]: "key1",
  email: "anas@example.com",
  location: "Pakistan",
  isActive: false,
  lastLogin: "more than 30 days ago"
};

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "anas@newemail.com"
// Object.freeze(Jsuser);

Jsuser.email = "anas@chatgpt.com"
console.log(Jsuser);

//working on functions inside objects

Jsuser.greeting = function(){
    console.log("Hello there!");
}
// const mySym2 = Symbol("key2");
// jsuser[mySym2] = function(){
//     console.log("Hello there!");
// }

console.log(Jsuser.greeting);

