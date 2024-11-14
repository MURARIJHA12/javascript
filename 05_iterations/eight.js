const myNums=[1,2,3,4];
/*
const myTotal=myNums.reduce(function(acc,currvalue){
    console.log(`acc:${acc}and currvalue:${currvalue}`)
    return acc +currvalue
},0)
*/

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const ShoppingCard=[
    {
        itemName:"js Course",
        price:2900
    },
    {
        itemName:"Python",
        price:290
    },
    {
        itemName:"mobile development ",
        price:5900
    },
    {
        itemName:"Data Structure",
        price:12900
    },
]
const priceTopay=ShoppingCard.reduce((acc,item)=>acc+item.price,0)
console.log(priceTopay);