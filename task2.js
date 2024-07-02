//create object

const employee=[{
    name1:"Aishwarya",
    Role1:"tester",
    company1:"cts"
},
{
name2:"riya",
Role2:"developer",
company2:"tcs"
},
{
name3:"siya",
Role3:"manager",
company3:"wipro"
},

{
name4:"criya",
Role4:"sr tester",
company4:"zoho"
},

{
    name5:"harshu",
    Role5:"BA",
    company5:"Renault"
}]
console.log(employee[2].name2="viya",employee[2].Role2="sr manager",employee[2].company2="lt")
console.log(employee[4].name4="gayu",employee[4].Role5="admin",employee[4].company5="syntel")

//object destructuring
 const objdest=[{
    name:"josh",
    gender:"female",
    age:30
 },
 {
    name2:"hansu",
    gender2:"female",
    age2:20
 }]
const{name2,gender2,age2}=objdest[1]
console.log("the name2 is",name2);
console.log("the gender2 is",gender2);
console.log("the age2 is",age2);

//array destructuring
const arr=["mango","apple","banana"]
const[fruit1,fruit2,fruit3]=arr
console.log("fruit1 is",fruit1);
console.log("fruit2 is",fruit2);
console.log("fruit3 is",fruit3);

//shorthand property
var student="Aishwarya"
var experience=6
const newstudent={
    student,
    experience
}
console.log(newstudent);
//settimeout

setTimeout(()=>{
    console.log("Hello Iam Javascript");
},10000)

//map
const multiply=[1,2,3,4,5,6,7,8,9,10]
multiply.map((val,idx,accval)=>
console.log(val*2));

//forin
const arrobj={
    name:"harshu",
    age:24,
    gender:"female"
}
for(let k in arrobj){
    console.log(k+":"+arrobj[k])
};

//for of
var words="Trends"
for(let str of words){
    console.log(str);
}

//filter
const filt=multiply.filter((value,index,accualarray)=>value%2!==0)
console.log(filt);

//class
class Studentin{
    Constructor(name,batch,year){
        this.name=name,
        this.batch=batch,
        this.year=year
    }}
    const Studentin=new Studentin("Aishwarya","cypress",2024)
    console.log(Studentin);




