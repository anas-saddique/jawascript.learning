
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