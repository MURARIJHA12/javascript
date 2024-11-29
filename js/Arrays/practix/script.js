/*
Q: FOR the given start of an arrays change it to final from using methods

sart:['january','july','march','august']

final:['july','march','august'];

*/

let month=['january','july','march','august'];
month.shift();
//console.log(month);
document.getElementById("root").innerHTML=`<h1>${month}</h1>`;