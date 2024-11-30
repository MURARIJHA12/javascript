let fruits=['Mango','Banana','Apple','Papaya','orange'];
for(let fruit of fruits){
    console.log(fruit);
}
for(char of "My name is murari"){
    console.log(char);
}


//nested for loops

let heroes=[["ironaman","spiderman","thod"],["superman","wonder woman","flash"]];
for(list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}