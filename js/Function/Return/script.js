/*function sum(a,b){
    return a+b;
}
  let s=sum(4,7);
  console.log(s);

  //three no sum
  console.log(sum(sum (4,5),7));  
*/
  //sum of 1 to n
  /*
 function sum(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum=sum+i;
  }
  return sum;
 }

 console.log(sum(1000)) ;
 */


 //Create a function that return the concatenation of all String in an arrays
  
 let str=["Hii","Hello","By","!"];
 function Concate(str){
    let result="";
    for(let i=0;i<str.length;i++){
      result+=str[i];
    }
    return result;
 }
 console.log(Concate(str));

