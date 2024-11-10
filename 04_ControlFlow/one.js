//if

/*
if(true){
console.log("Code are exucated");
}
if(false){
    console.log("code are not excucated");
}
//console.log("code are not excucated");

*/
/*
if(2==="2"){
    console.log("This statement are true");
    return 
}
console.log("This message are wrong");

*/
/*
let temp=56;
if(temp<50){
    console.log("Temperature is less than 50");
}
else{
    console.log("Tempeeature is Greater than 50");
}

*/
/*

let score=200;
if(score>100){
    const power="fly"
    console.log(`user power:${power}`);
}

 //console.log(`user power:${power}`);

 */


 //const balance=1000;
/*
 if(balance>500){
    console.log("test");
 }

 */
/*
 if(balance<500){
   console.loy("less than");
 }
 else if(balance<750){
    console.log("less than 750");
 }
 else if(balance<900){
    console.log("less than 900")
 }
 else{
    console.log("Greater than 900");
 }
    */

 const userLoggedIn=true
 const debitCard=true

 const LoggedInFromGoogle=false;
 const LoggedInFromEmail=true;


 if(userLoggedIn &&debitCard){
    console.log("Allows to buy Course");
 }
 if(LoggedInFromEmail || LoggedInFromGoogle){

    console.log("User Logged In");
 }