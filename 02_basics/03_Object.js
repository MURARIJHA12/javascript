
const mySym=Symbol("key1")


const JsUser={
    name:"Murari",
    "Full name":"MURARI JHA",
    [mySym] :"mykey1",
    age:23,
    location:"Bihar",
    email :"jhamurari0987@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//display the value of an arrays
console.log(JsUser.email);
// console.log(JsUser.Full name);//.doesnot exited the arrays/
console.log(JsUser["Full name"]);
console.log(typeof JsUser["mySym"]);


//change the value of the Arrays
JsUser.email="JhaSubhash@gmail.com";
console.log(JsUser.email);


//if does not change the value of arrays 
//Object.freeze(JsUser);
JsUser.email="JhaRakeshh@gmail.com";
console.log(JsUser.email);//JhaSubhash@gmail.com
console.log(JsUser);//all property of the an arrays


//function in js

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greeting2=function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());//Hello Js user
console.log(JsUser.greeting2());//Hello Js user, Murari