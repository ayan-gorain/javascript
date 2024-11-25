// # primitive datatype



// 7 types :String,Number,Boolean,null,undefined,symbols,BIG INT,


const score=100
const scoreVal=100.3

const isLoggedin =false

const outsideTemp=null
let userEmail;

const id=Symbol('123')
const aid=Symbol('123')

console.log(id=== aid);


const bigNumber = 188282481891n

// reference type(Non Primitive)

// Array objects,Functions

const heros=["shakiman","naagraj","doga"]


let myobj={
    name:"ayan",
    age:22,

}

const myfun =function (){
    console.log("Hello world");
    

}

console.log(typeof outsideTemp);





//+++++++++++++++++++++++++++++++++++++++++++

//stack(primitive), heap(reference)


let myYoutubename="chaiaurcode"


let anothername=myYoutubename

anothername="abcd"
console.log(anothername);


