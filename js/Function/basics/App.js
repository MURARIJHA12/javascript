function hello(){
    console.log("Hello");
}

//call 
hello();
hello();
hello();
hello();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=prompt("Enter the age:");
    if(age>18){
        console.log("You are Elligibal for the voting");
    }
    else{
        console.log("You are not elligibal for the voting:","wait for ",(18-age),"years");
    }
}
  isAdult();//calling
