//push
const hero=["rajini","vijay","ajith"]
console.log(hero);
hero.push("hari")
hero.push("gopal")
console.log(hero);

//pop

const removehero=hero
removehero.pop()
console.log(removehero);

//unshift

const animal=["tiger","lion","cheeta"]
console.log(animal);
animal.unshift("bear")
console.log(animal);

//shift

const removeanimal=animal
removeanimal.shift()
console.log(removeanimal);

//concat

const fruits=["apple","banana","berry"]
const morefruits=fruits.concat("mango","dragon","papaya")
console.log(morefruits);

const number=[1,2,3,4,5]
const addnumber=[5,6,7,8,9,10]
const combinednumber=number.concat(addnumber)
console.log(combinednumber);

//sort

const ascsort=[1,7,9,3,5,2,6,8,10,4]
ascsort.sort((a,b)=>a-b)
console.log(ascsort);

//descending

const dessort=[1,7,9,3,5,2,6,8,10,4]
dessort.sort((a,b)=>b-a)
console.log(dessort);

//split

const sp="hello world!"
const split=sp.split(" ")
console.log(split);

//join

const joins=split.join(",")
console.log(joins);

//slice

const birds=["parrot","pigeon","eagle","vulture"]
console.log(birds.slice(2,-1));

//split

const weeks=["sunday","monday","wednesday","friday","saturday"]
weeks.splice(2,0,"tuesday")
weeks.splice(4,0,"thursday")
console.log(weeks)

//object
// const studentarr={
//     name:"arun",
//     role:"tester",
//     company:"amazon",
//     year:2024
// }
// console.log(studentarr.name)
// console.log(studentarr.role);
// console.log(studentarr.company);
// console.log(studentarr.year);

const studentarr={
    name:"arun",
    role:"tester",
    company:"amozon",
    year:2024
}
studentarr.name="vijay"
console.log(studentarr);

//to give multiple objects

const student=[{
    name:"priya",
    role:"testing",
    company:"abcd",
    year:2024
},
{
    name:"kaviya",
    role:"sr testing",
    company:"prr",
    year:2024  
},

// {
// name:"jeevi"
// role:"TL"
// company:"proxi"
// year:2024
// },
// {
// name:"riya"
// role:"leadr"
// company:"pro"
// year:2024
// }
]
// console.log(student[1]);

// const keys=object.keys(studentarr[4])


const newname={
    name:"archana",
    role:"testing",
    company:"microsoft",
    year:2024
}
newname.name="rachel"
console.log(newname);
