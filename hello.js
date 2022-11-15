/*console.log("hello");
let a=10;
const a=11
const b=20;
console.log("a is "+a);
console.log("b is "+b);

// check condition
if(a>b){
    //scope
    var c=10;
    console.log("a is greater"+a);
}else{
    console.log("b is greater "+b);
}
console.log(c)
const n=10;
for(let i=0;i<n;i++){
    console.log(i);
}
try{
    throw new Error("can't devide 0");
}catch(err){
    console.log(err)
}
function print(x){
    console.log(x)
}
print(5);
print("hello");
*/
var cowsay = require("cowsay");
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "o o",
    T : "U "
}));





