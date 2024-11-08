const tinderUser=new Object()
//or
/*
const timnderUser={}
timnderUser.id="123456"
timnderUser.name="Subhash"
timnderUser.isLoggedIn=false
console.log(tinderUser)//{}
console.log(timnderUser)//{ id: '123456', name: 'Subhash', isLoggedIn: false }*/

/*
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
          first_name:"Murari",
          least_name:"Jha"
        }
    }
}
console.log(regularUser.fullname.userFullname.first_name);//Murari
*/
//combination of two object
/*
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Merging obj1 and obj2 into obj3 using Object.assign
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3)//output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3={...obj1,...obj2}
console.log(obj3);//output :{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/
const users=[
    {
       id :1,
       email:"jhamurari0987@gmail.com"
    },
    {
        id :2,
        email:"jhasubhash0987@gmail.com"
     },
     {
        id :1,
        email:"jharakesh0987@gmail.com"
     },
]
console.log(Object.keys(users));//[ '0', '1', '2' ]
console.log(Object.values(users));
console.log(Object.entries(users));
// //output:[ '0', { id: 1, email: 'jhamurari0987@gmail.com' } ],
//   [ '1', { id: 2, email: 'jhasubhash0987@gmail.com' } ],
//   [ '2', { id: 1, email: 'jharakesh0987@gmail.com' } ]