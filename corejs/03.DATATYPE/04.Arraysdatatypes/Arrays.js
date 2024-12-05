//create in arrays forms

// 1st method
//create an arrays
/*
const names = ["Murari Jha"];
const emails = ["jhamurari0987@gmail.com"];
const mobiles = ["9262966487"];
const cities = ["Darbhanga"];

document.getElementById("name").textContent = userDetails[0];  
document.getElementById("email").textContent = userDetails[0]; 
document.getElementById("mobile").textContent = userDetails[0]; 
document.getElementById("city").textContent = userDetails[0];

*/



//2nd method
const userDetails = [
    ["Murari Jha", "jhamurari0987@gmail.com", "9262966487", "Darbhanga"]
];

document.getElementById("name").textContent = userDetails[0][0];  
document.getElementById("email").textContent = userDetails[0][1]; 
document.getElementById("mobile").textContent = userDetails[0][2]; 
document.getElementById("city").textContent = userDetails[0][3];
