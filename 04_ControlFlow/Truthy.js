//const userEmail="jhamurari0987@gmail.com"
/*
const userEmail=""

if(userEmail){
    console.log("got user email");

}
else{
    console.log("Don't have user email");
}
    */

//false values example: false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy Values Example: true ,1,"0",'false'," ",[],{},function()
/*
if(userEmail.length===0){
    console.log("Arrays are empty");
    
}
    */

//object are empty

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("Object are empty");
}

//Nullish Coalescing operator(??):null undefined

let val1;
//val1=5??10//output:5
//val1=null??10//output:10
// val1=undefined ??15;//output:15
// val1=undefined ??15;//output:15

// val1=null ?? 10??15;//output:10

//console.log(val1);
//console.log(val1);

//terniary operators

// Syntax:condition  ? true :false

const iceTeaprice=100;

iceTeaprice <=80 ?console.log("less than 80"):console.log("greater than 80");