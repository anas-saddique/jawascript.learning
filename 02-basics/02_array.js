const ndg_heros = [ "Ali", "Anas", "Munyyb" ]
const dc_heros = [ "Batman", "Superman", "Wonder Woman" ]

// ndg_heros.push("dc_heros");
// console.log(ndg_heros); 
// ndg_heros.concat(dc_heros);
// console.log(ndg_heros);

// const all_heros = ndg_heros.concat(dc_heros);
// console.log(all_heros);

 const all_heros = [...ndg_heros, ...dc_heros,];

// console.log(all_heros);

const another_heros = [1, 2, 3, [4,5,6], 7, [6,7, [4,5]]] 
const real_another_heros = another_heros.flat(2);
console.log(real_another_heros);

console.log(Array.isArray("Anas siddique"));
console.log(Array.from("Anas siddique"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));