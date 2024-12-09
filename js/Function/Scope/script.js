// 1:functional Scope
/*
let sum=54;//Global scope  

function calsum(a,b){
    let sum=a+b;//Functional Scope
    console.log(sum);
}
calsum(2,5);
console.log(sum);

*/

// 2:Block Level
/*
{
    let a=34;
    console.log(a);
}
    */


//3.Lexical Scope:

/*
function outerfun() {
    let x = 5;
    let y = 8;
    function innerfun() {
        console.log(x);
        console.log(y);
    }
    innerfun();  
}

// Call the function to see the output
outerfun();

*/

