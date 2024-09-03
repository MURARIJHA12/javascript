//array

const myarr=[0,1,2,3,4,5];

console.log(myarr[1]);

//method of an array

//push
myarr.push(6);//array element are added
myarr.push(7);
console.log(myarr);

//pop
myarr.pop();//delete the least element
console.log(myarr);


//unshift
myarr.unshift(9);//first element are shited 0->9;
console.log(myarr);//output=9,0,1,2,3,4,5,6

//shift
myarr.shift();
console.log(myarr);//output=0,1,2,3,4,5,6;

const newarr=myarr.join();
console.log(newarr);



// //slice,splice

//slice
console.log("A",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);

console.log("B",myarr);


//splice

const myn2=myarr.splice(1,3)
console.log("c",myarr);
console.log(myn2);


//output=
/*
A [
  0, 1, 2, 3,
  4, 5, 6
]
[ 1, 2 ]
B [
  0, 1, 2, 3,
  4, 5, 6
]
c [ 0, 4, 5, 6 ]
[ 1, 2, 3 ]

*/

