// let arr=[1,2,3,4,5,6,7];
// /*
// function print(el){
//      console.log(el);
// }
// arr.forEach(print);
// */
// //or 2nd method
// arr.forEach(function(el){
//     console.log(el);
// })

//object in arrays

let arr1=[{
    name:"Murari",
    marks:78 ,
            },
{
    name:"subhash",
    marks:87 ,
},
{
    name:"suraj",
    marks:97 ,
}]
arr1.forEach(function(student){
    console.log(student.marks)  ;
})