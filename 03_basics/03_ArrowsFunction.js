const user={
    username:"Murari",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username }, welcome to website`)
       // console.log(this);//current value refer
    }

}

// user.welcomeMessage();
// user.username="Subhash"
// user.welcomeMessage();

// console.log(this);//output: {}
/*
function chai(){

    let username="Murari";
  //  console.log(this.username);//undefined
}
chai();//calling the function
*/

/*
const chai=function(){
    let username="Murari"
    console.log(this.username);
}
chai();
*/

//ArrowsFunction

//basics Arrows Function

/*
const  addTwo=(num1,num2) => {
    return num1+num2;
}
console.log(addTwo(6,7));

*/

//implicate return 
const  addTwo=(num1,num2) => num1+num2;

console.log(addTwo(6,7));

const myArray=[2,5,3,4,6]