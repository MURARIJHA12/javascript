let num=[1,2,3,4];
let double=num.map(function(el){
    return el*2;
})
// console.log(double);

document.write(`<h1>${double}</h1>`);



let students=[{
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
}];
let gpa=students.map((el)=>{
    return el.marks/10;
})
document.write(`<h1>${gpa}</h1>`);