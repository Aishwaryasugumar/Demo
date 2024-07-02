//ternary operator

var weight=30
var sportjoin=weight>30?"she is eligible to join sport":"she is not eligible to join sport"
console.log(sportjoin);

//comparision

var a=15
var b=a
console.log(b)

//greater than
var x=30
var y=40
console.log(x>y);

//assignment

var c=30
c+=15
console.log(c)

//increment
var d=20
d++
console.log(d);

//dercrement
var e=50
e--
console.log(e)

//arithmetic-modolus

var m=8
var n=17
console.log(m%n)

//function statement or declaration

function nam(){
 console.log("hello gopal how are you" )
}
nam()


//copy by reference

var g={value:50}
var h={value:70}
g.value=80
h=g
console.log(g);
console.log(h);

//function expression-division

var fe=function(){
    var t=50
    var s=10
    console.log(t/s);
}
fe()

//first class function

function squarefn(square){
    return square**2
}
function newsq(newfn){
    console.log("the square value is" ,newfn(6))
}
newsq(squarefn)

//for loop

for(var a=0;a<10;a++){
    console.log(a);
}

for(var i=10;i>0;i--){
    console.log(i);
}
var name1="trends"
for(var i=0;i<name1.length;i++){
    console.log(name1[i]);
}


for(var n=1;n<10;n++){
    console.log(n*2)
}

//while
var counter=5

while(counter>0){
    console.log("the while counter is:",counter);
    counter--
}
console.log("loop ended");













