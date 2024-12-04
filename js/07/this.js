const student  ={
    Name:"Murari",
    age:23,
    city:"Darbhanga",
    math:97,
    English:87,
    physics:98,
    getAvg(){
        console.log(this);
        let avg=((this.math+this.English+this.physics)/3);
        console.log(avg);
    }
};  
