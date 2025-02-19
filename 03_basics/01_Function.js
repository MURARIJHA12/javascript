
function murari(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("H");

}
//murari();//function call

/*
function addTwonumbers(num1,num2){//num1,num2 are parameter
console.log(num1+num2);  
}
addTwonumbers();     //output:NaN
addTwonumbers(5,7);  //5 and 7 are argument  output:12 
addTwonumbers(5,"7");  //output:57 

*/
/*
function addTwonumbers(num1,num2){

//   let  result=num1+num2;
//   console.log('Murari');
    return num1+num2;
}
let result=addTwonumbers(3,5);
console.log("REsult:",result);

*/
/*
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage());    //output:undefined just logged in
console.log(loginUserMessage("Murari"));    //output:Murari just logged in
*/

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please Enter the User Name:");
//         return ;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());
// console.log(loginUserMessage("Murari"));

function calculateCartprice(...num1){//...->REsult operators
    return num1;
}
//console.log(calculateCartprice(200,400,600,800));  //output:[200,400,600,800]

const user={
    Username:"Murari",
    prices:200
}
function handleobject(anyobject){

    console.log(`username is${anyobject.Username} and price is ${anyobject.prices}`)

}
handleobject(user);

//diret pass the value
handleobject({
    Username:'Subhash',
    prices:2000
});

const myNewArray=[200,400,600,800]

function returnsecondvalue(getArray){
  return getArray[1];
}
// console.log(returnsecondvalue(myNewArray));//output:400
console.log(returnsecondvalue([200,400,600,800,1000]));//output:400
