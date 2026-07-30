const gamename = new String("callofduty");

console.log(gamename.charAt(8));
console.log(gamename.indexOf("t"));

const newString = gamename.substring(0, 4);
console.log(newString);
const anotherString = gamename.slice(-8, 4);
console.log(anotherString);

const newStringONE =  "   Anas  ";
console.log(newStringONE);
console.log(newStringONE.trim());

const url = "https://www.google.com/anas%20siddique";
console.log(url.replace("%20", "-")); 

console.log(url.includes("google"));
console.log(url.includes("instagram"));
