/*
let a=300;


if(true){
    let a=10;//local scopes 
    const b=20;//local scopes
    var c=30;//Globale Scopes
    console.log("Inner:",a);//10

    for(let i=0;i<Array.length;i++){
        const element=arr[i];
    }
   }
    */
//console.log(a);
//console.log(b);
//console.log(c);//30
//console.log(a);//300

//nested scope

/*
function one(){
    const username="Murari";

    function two(){
        const website="Youtube";
        console.log(username);
    }
   // console.log(website);

    two();
}
    */
//one();

if(true){
    const username="murari"
    if(username==="murari"){
        const website=" youtube"
       // console.log(username+website);//output:murari youtube
    }
   // console.log(website);
}
//console.log(username);


//++++++++++++++++++++interesting+++++++++++++++++++++++++++

//normal function
function addone(value){
  
    return value+1;
}
console.log(addone(5));//output: 6

//expracction 
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(6));//output:8