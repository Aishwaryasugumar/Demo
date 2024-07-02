//foreach

const studarr=["hari","muthu","selve","aravind"]

studarr.forEach((val,idx,accarr)=>console.log(val))

//forin

const arrobj={
    name:"sathya",
    age:24,
    height:171.6
}
for (let k in arrobj){
    console.log(k+":"+arrobj[k]);
}


//for of

var string="string"
for(let str of string){
    console.log(str);
}
//map

const numbers=[1,2,3,4,5,6,7,8,9]
numbers.map((va,id,acc)=>console.log(va*2))

//filter

const filtnum=numbers.filter((vaa,idd,acca)=>vaa>5)
console.log(filtnum);

//reduce

const reducenum=numbers.reduce((accu,valu,index,accarrr)=>{
    return accu+index
},5)
console.log(reducenum);

function studentdet(name,age,gender){
return{
    getinfo:function(){
        console.log(`the name is${name} and age is ${age} and gender is ${gender}`);
    }
}
}
const newfn=studentdet("hari",68,"male")
    newfn.getinfo()

