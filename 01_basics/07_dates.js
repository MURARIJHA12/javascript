//fdate

let myDate=new Date();

console.log(myDate.toString());//currenteliy times output=Mon Sep 02 2024 18:06:45;

console.log(myDate.toISOString());//output=2024-09-02T18:08:36.290Z

console.log(myDate.toJSON());//same as toISOString output=2024-09-02T18:08:36.290Z

console.log(myDate.toLocaleDateString());//output=9/2/2024

console.log(myDate.toLocaleString());//output= 9/2/2024, 6:14:43 PM;

console.log(myDate.toDateString());//output=Mon Sep 02 2024

console.log(typeof myDate);//output= object;

let myCreatedDate=new Date(2024,0,23);// output=Tue Jan 23 2024 (note -month are conted at 0 to 11);
console.log(myCreatedDate.toDateString());

let myCreatedDate1=new Date(2024,12,23);// output=Tue Jan 23 2025 (note -month are conted at 01 to 11);
console.log(myCreatedDate1.toDateString());

let myCreatedDate2=new Date("2024,01,23");// output=Tue Jan 23 2024 (note -month are conted at 00 to 12);
console.log(myCreatedDate2.toDateString());

let myCreatedDate3=new Date("09-02-2024");// output=Mon Sep 02 2024
console.log(myCreatedDate3.toDateString());

let  newDate=new Date();

console.log(newDate);

console.log(newDate.getMonth());//output=8
console.log(newDate.getMonth()+1);//output=9

console.log(newDate.getDay());//output=1
console.log(newDate.getDay()+1);//output=2

newDate.toLocaleString('default',{
    weekday:"long"

})



