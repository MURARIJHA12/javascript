//#primative

//  7 types:string,Number,Boolearn,null,undefined,symbol,BigInt;
const score=100;
const scorevalue=100.3;

const isLoggedIn= false;
const outsideTemp=null;

const id=Symbol('123')
const anotherId=Symbol('123')
 
console.log(id==anotherId);//false

const bigNumber=34567899n;

//reference type(non premative)

//Array,objects,functions

const heros=["shaktaima","murari","rakesh"];


let myobj={
    name:"Murari",
    age:23,
}
 const myfunction=function(){
console.log("Hello Sir");
}

console.log(typeof bigNumber);