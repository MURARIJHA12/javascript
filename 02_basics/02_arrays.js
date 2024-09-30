const mcaA=["Satyam","sandeep","Raksha"];
const McaB=["murari","pawan","shivam"];

// mcaA.push(McaB);
// console.log(mcaA);

//concat
/*
let MCA=mcaA.concat(McaB);
console.log(MCA);
*/

//sprede- bikharna 
/*
const allMCA=[...mcaA,...McaB]
console.log(allMCA);

const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

*/
console.log(Array.isArray("MURARI"));//no
console.log(Array.from("MURARI"));//[ 'M', 'U', 'R', 'A', 'R', 'I' ]
