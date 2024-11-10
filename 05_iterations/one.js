//for loops
//Syntax of for loops
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    */
   /*
for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}
//console.log(element);
*/

//Nested loops
/*
for (let i = 1; i <=10; i++) {
   console.log(`Outer loops value:${i}`);
   for (let j = 1; j < 10; j++) {
    //console.log(`Inner loop value ${j} and inner loops ${i}`);
    console.log(i+'*' +j+'='+i*j);
    
   }
    
}

*/

/*
let myArray=["Murari","Subhash","Suraj","Rakesh","Sandeep","Shivam","Satyam"]
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
const element=myArray[i];
console.log(element);
}

*/

//keywords in java script

//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        //break;
       // continue;
    }
    console.log(`Value of i is ${i}`);
}