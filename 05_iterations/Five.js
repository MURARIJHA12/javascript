//for each loops->calls a function for each element in an arrays
//* the forEach() method is not executed for empthy element

const coding=["JS","ruby","Java","Python","Cpp"];
//used of normal function
/*
coding.forEach(function (item){
 console.log(item);
})
 */

//used of Arrays Function
/*
coding.forEach( (item)=>{
 console.log(item);
})
 */
 // 3rd method 
 /*
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
*/


coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

const mycoding=[
    {
        languageName:"javaScript",
        languageFileName:"Js"
    },

    {
        languageName:"C Language",
        languageFileName:"C"
    },
    
    {
        languageName:"java Language",
        languageFileName:"Java"
    },
    
    {
        languageName:"Python",
        languageFileName:"Php"
    },
    

]

mycoding.forEach((item)=>{

    console.log(item.languageName);
})