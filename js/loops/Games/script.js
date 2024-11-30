let favMovie="Jaan";
let gess=prompt("gass the Favorite Movie for me");
while((gess!=favMovie)&&(gess!='quit')){
   console.log("wrong");
   gess=prompt("Again gest");
}
if(gess==favMovie){
console.log("congrats!!");
}else{
    console.log("quit");
}