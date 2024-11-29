let car=["audi","bmw","maruti","xuv"];
car.push("toyta");//least index element are added
console.log(car);   // ['audi', 'bmw', 'maruti', 'xuv', 'toyta']
car.unshift("fortunar");//first index element are added
console.log(car);     //['fortunar', 'audi', 'bmw', 'maruti', 'xuv', 'toyta']

 car.pop();//least index element are removed
 console.log(car);  // ['fortunar', 'audi', 'bmw', 'maruti', 'xuv']

 car.shift()//first index element are removed

 console.log(car);// [ 'audi', 'bmw', 'maruti', 'xuv']

 //indexof:return index of something

 console.log(car.indexOf("bmw"));     //1
 

 //includes:search for a value

 console.log(car.includes("bmw"));   //true

 console.log(car.includes("bolaro"));  //false 


 //concate:marge of 2 arrays(concationation)

 let first=['red','yellow','blue'];
 let second=['orange','pink','green'];
 console.log(first.concat(second));//['red', 'yellow', 'blue', 'orange', 'pink', 'green']


 //reverse:reverse of an arrays

 console.log(first.reverse());   //['blue', 'yellow', 'red']


 //slice:copies a protion of an arrays

 let color=['red', 'yellow', 'blue', 'orange', 'pink', 'green'];

 console.log(color.slice());//['red', 'yellow', 'blue', 'orange', 'pink', 'green']

 console.log(color.slice(3));  //['orange', 'pink', 'green']

 console.log(color.slice(2,3));   //['blue']

 console.log(color.slice(-2));    //['pink', 'green']


 //splice: removes/replaces/add elements in place

 console.log(color.splice(4));    //['pink', 'green']

 console.log(color.splice(0,1));   //['pink', 'green',red]

 console.log(color.splice(0,1,"black","grey"));//black gray blue orange

  //sort : sorts an arrays (it is used basically string and char)

  let num=[24,7,90.89,4,90];
  console.log(num.sort());
 