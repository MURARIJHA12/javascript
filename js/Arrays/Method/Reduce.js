/*
let nums=[1,2,3,4];
let result=nums.reduce((res,el)=>res*  el);
document.write(`<h1>${result}</h1>`)

*/
//find the maximum elenet in an arrays

/*
let arr1=[23,45,56,322];

let max=-1;
for(let i=0;i<arr1.length;i++){
    if(max<arr1[i]){
        max=arr1[i];
    }
}
// document.write(`<h1>${max}</h1>`);
console.log(max);

*/

let arr1=[23,45,56,322];

let max=-1;

 max=arr1.reduce((max,el)=>{
    if(max<el){
        return el;
    }
})
document.write(`<h1>${max}</h1>`);



