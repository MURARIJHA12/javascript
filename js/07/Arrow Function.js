const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,7); 
const sum1=(a,b)=>console.log(a+b);
sum1(5,7); 

const cube=(n)=>{
    return n*n*n;
}
console.log(cube(3));

const pow=(a,b)=>{
    return a**b;
};
console.log(pow(3,4));  

//implicit return

const mul=(a,b)=>(
a*b
)
console.log(mul(3,4)) ;