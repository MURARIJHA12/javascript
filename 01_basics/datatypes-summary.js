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

                 // MEMORY-


//stck (primative),Heap(non-primative)
//stack 

let myname="MURARI KUMAR JHA";

let anothername=myname;
anothername="Subhash jha";
console.log(myname);//MURARI KUMAR JHA
console.log(anothername);//Subhash jha


//heap

let userone={
    email:"jhamurari0987@gmail.com",
    upi: "9262966487@ibl"
}

let user2=userone;

user2.email="Subhashjha@gmail.com";

console.log(userone.email);//Subhashjha@gmail.com
console.log(user2.email);//Subhashjha@gmail.com