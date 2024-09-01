const name="Murari";
const repoCount=50;

//console.log(name+repoCount+"value"); it is oldest method of concation of two string

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);;//it is the best method of two string concation(new method);

console.log(name[0]);
console.log(name.__proto__);//object prototypes;

console.log(name.length);//find the length of string result=(6);

console.log(name.toUpperCase());//convert string lower case to upper case result=(MURARI);

console.log(name.charAt(3));//possition of chatacter result=a;


console.log(name.indexOf('i'));//possition of index result=5;

const newString=name.substring(0,2);//divided into a string in substrin result=Mu;

console.log(newString);

const anotherString=name.slice(-6,3);//reverse of a string result=Mur

console.log(anotherString);

const newString1="   murari   ";
console.log(newString1);// result =   murari  
console.log(newString1.trim());//trim is the removed of space  result=murari;

const url="https://murari.com/murari%2001jha";

console.log(url.replace('%2001','_'));//replace the value are changed result=https://murari.com/murari_jha;

console.log(url.includes('murari'));//finde the any value are existed in string  result=true;

console.log(url.split('_'));