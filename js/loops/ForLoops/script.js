 //print the 1 to 5 number;
 /*
 for(let i=1;i<=5;i++){
    console.log(i);
 }

 //print all odd number 1 to 15

 for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
 }
    

 //print the multiplication of 5
//  console.log("table of 5");
let n=prompt("Write the number:");
//n=parseInt(n);
 for(let i=1;i<=10;i++){
    console.log(n,"*",i,"=",n*i);
 }
    */


//  Nested for loops

for(let i=1;i<=3;i++){//outer loops
    console.log(`outerloops${i}`);
    for(let j=1;j<=3 ;j++){//inner loops
        console.log(j);
    }
    
}