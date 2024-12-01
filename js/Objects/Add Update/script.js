const students={
    name:"murari",
    age:23,
    city:"darbhanga",
    marks:87
};
console.log(students); 
//change the city name darbhanga to patana
students.city="Patna"; 
console.log(students);
//Add the new property Gender:male
students.gender="male";
console.log(students);
//update the marks in grade
students.marks="A";
console.log(students);
//delete the marks
delete students.marks;
console.log(students); 