// Qyestion 1: Check if all number in our arrays are multiples of 10 or not
//used for every
let arr=[10,20,30,40];
let result=arr.every((el)=>el%10==0);
document.write(`<h1>${result}<h1>`);

let arr1=[12,20,30,40];
let result1=arr1.every((el)=>el%10==0);
document.write(`<h1>${result1}<h1>`);



//Question 2:find the minimu element in an arrays

let nums=[1,2,34,55,-5];
let min=0;
min=nums.reduce((min,el)=>{
    if(el<min){
        return el;

    }
    else{
        return min;
    }
})
document.write(`<h1>${min}</h1>`);