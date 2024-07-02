//operators

//modulus

var numa=10
var numb=20
console.log(numa%numb);

//ternary

var value=20
var number=(number==20)?"numbers are equal":"numbers are not equal"
console.log(number);

const words="Trends"
console.log(words);

//Reverse function

function reversestr(){
    var reverse="Trendnologies"
    var empty=" "
    for(var i=reverse.length-1;i>=0;i--){
        empty+=reverse[i]
}}

//iterate function



//loopings

var fruits=["apple","orange","banana","iceapple"]
fruits.forEach((val,idx,acuval)=>
    console.log(val))

//print odd numbers between 20 to 30

var oddnum=[20,21,22,23,24,25,26,27,28,29,30]
for(var i=20;i<=30;i+=3){
    console.log(i);
}


//if else
var evennum=20
if(evennum/2){
    console.log("it is a even number")}
    else{
        console.log("it is not a even number");
    } 

  // print given year is leap year or not 

  var year=2020
  if(year/4){
    console.log("Given year is leap year");
  }
  else{
    console.log("Given year is not a leap year");
  }

  //to check weather
  var weather=40
  if(weather<=40){
    console.log("weather is hot");}
    else if(weather>=40){
        console.log("A common weather");
    }
    else if(weather<0){
        console.log("weather is cold");
    }
//Array methods

//push
const arrname=["zoho","wipro","accenture","google"]
arrname.push("tcs")
arrname.push("cts")
console.log(arrname);

//pop

const removearr=arrname
removearr.pop()
console.log(removearr);

//slice
const company=["zoho","wipro","accenture","google"]
console.log(company.slice(2,-1));

//splice
const newcomp=["zoho","wipro","accenture","google"]
newcomp.splice(1,0,"Renault")
console.log(newcomp);

//sort
const ascending=["zoho","wipro","accenture","google"]
ascending.sort((a,b)=>(a-b))
console.log(ascending);



