//for of

//["","","",""]->Arrays Strings
//Arrays ma object ->[{},{},{},{}]

/*
const arr=[1,2,3,4];
//for of loops

for (const element of arr) {
     console.log(element);
};
const greattings="Hello Worlds"
for (const greet of greattings) {
    console.log(`each char is  ${greet}`);
    
}
    */

//map ->keys value pairs of value stroed;
/*
const map= new Map()
map.set('a',3);
map.set('b',4);
map.set('c',7);
console.log(map.get('a'));//output: 3

map.set('a',34);
console.log(map.get('a'));//output:34

console.log(map.size);//output:3

map.delete('b');

console.log(map);//output:Map(2) { 'a' => 34, 'c' => 7 }

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
*/

const myobject={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myobject) {

    console.log(key,':-',value);
    
}