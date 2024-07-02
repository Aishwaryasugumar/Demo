//object-giving keys and values
const studentarr={
    name:"Aishwarya",
    role:"Tester",
    company:"zoho",
    year:2024
}
studentarr.name="harshu"
console.log(studentarr);

//to get particular student detail

const studentnew={
    name:"Aishwarya",
    role:"Tester",
    company:"zoho",
    year:2024
}
console.log(studentarr.name);
console.log(studentarr.role);
console.log(studentarr.company);
console.log(studentarr.year);


//Giving multiple object in array-when we need multiple data


const employee=[{
    name:"Aishwarya",
    role:"tester",
    company:"tcs",
    year:2024
},

{
    name:"hansi",
    role:"developer",
    company:"hcl",
    year:2024
},

{
    name:"divya",
    role:"lead",
    company:"cts",
    year:2024
},

{
    name:"riya",
    role:"manager",
    company:"wipro",
    year:2024
}]

console.log(employee);

//to get particular employee
console.log(employee[1]);

//to show only keys

const member=[{
    name:"ramu",
    role:"driver",
    company:"renault",
    year:2024
},
{
    name:"mano",
    role:"admin",
    company:"veer",
    year:2024
},
{
    name:"siva",
    role:"assistant",
    compnay:"wcs",
    year:2024}
]
console.log(member[2]);
 const keys=Object.keys(member[2])
 console.log(keys);




//object destructuring
// const newobj={
//     name:"arumugam",
//     age:45,
//     gender:"male",
//     mentor:false
// }
// const{name,age,gender,mentor}=newobj
// console.log("the name is=>",name);
// console.log("the age is =>",age);
// console.log("the gender is=>",gender);
// console.log("the mentoris=>",mentor);

// const newemployee=[{
//     name1:"viya",
//     age1:20,
//     gender1:"female"
// },
// {
//   name2:"giya",
//   age2:25,
//   gender2:"Male"
// },
// {
//     name3:"uiya",
//     age3:35,
//     gender3:"Male"
// },

// ]
// const{name3,age3,gender3}=newemployee[2]

// console.log("the first name is=>",name2);
// console.log("the age is=>",age2);
// console.log("the gender is=>",gender2);



//array destructuring

// const arr=["mango","apple","banana"]
// const[fruits1,fruits2,fruits3]=arr
// console.log(fruit1);


//foreach

const studarr=["hari","muthu","selve","aravind"]

studarr.forEach((val,idx,accarr)=>console.log(val))