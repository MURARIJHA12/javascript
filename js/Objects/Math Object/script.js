//properties
 console.log(Math);
console.log(Math.PI);

console.log(Math.E);

//method

//Math.abs(n)=all positive no or nigative number ko possitive no ma conver kar deta hai
console.log(Math.abs(2.111));//2.111
console.log(Math.abs(-2.111));//2.111


//Math.pow(a,b)=a**b;
console.log(Math.pow(2,3));//8

//Math.floor()-number ko roundup kar deta hai nicha ki taraf
console.log(Math.floor(2.9999999));//2

//Math.ceil()->  number ko random kar data hai nearset largest

console.log(Math.ceil(2.0000001));//3


//Math.random()-0 to 1 ka bich ma any random no but 1 are not existed

console.log(Math.random());//0.926035675912225 or bhi koi nahi ,0.30062060599779605



//Question 1: Generate a random number b/w 1 and 100

n=Math.floor(Math.random()*100)+1;
console.log(n);


//Question 2: Generate a random number b/w 1 and 5

n1=Math.floor(Math.random()*5)+1;
console.log(n1 );



//Question 3: Generate a random number b/w 21 and 25

n2=Math.floor(Math.random()*5)+20;
console.log(n2);

