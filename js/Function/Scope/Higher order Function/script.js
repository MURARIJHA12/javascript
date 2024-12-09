/*
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello");
}
multipleGreet(greet,2);
//output:2Hello;  

*/

let n = prompt("Enter the value of n:");

function oddorevenfactory(request) {
    if (request === "odd") {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if (request === "even") {
        let even = function(n) {
            console.log(n % 2 == 0);
        }
        return even;
    } else {
        console.log("Wrong request");
    }
}

let request = prompt("Enter 'odd' or 'even':");
let checkFunction = oddorevenfactory(request);

if (checkFunction) {
    checkFunction(parseInt(n));
}
