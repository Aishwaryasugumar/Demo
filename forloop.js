// for(var i=0;i<10;i++){
//     console.log(i);
// }

// for(var i=10;i>0;i--){
//     console.log(i);
// }

// var name1="trends"
// for(var i=0;i<name1.length;i++){
//     console.log(name1[i]);
// }

//to print horizontal

// var name1="trends"
// var empty=""
// for (var i=0;i<name1.length;i++){
//     empty+=name1[i]
    
// }
// console.log(empty);

//to reverse string
// var revstr="arun"
// var empty=""
// for(var i=revstr.length-1;i>=0;i--){
//     empty+=revstr[i]
// }
// console.log(empty);

//to print 2 table

// for (var i=1;i<10;i++){
//     console.log(i*2);
// }

var number="123456789"
var empty=""
for(var i=0;i<number.length;i++){
    empty+=number[i]
    console.log(empty);  
}

//dowhile
var num=5
do{
console.log(num)
num++
}while(num<5)

    //ifelse
    var age=15;
    if(age<=18){
        console.log();
    }


    //eleif
    var grade=85
    if(grade>=90){
        console.log("the grade is A");
    }
    else if(grade>=80){
        console.log("the grade is B");  
    }
    else if(grade>=70){
        console.log("the grade is c");
    }
    else if(grade>=60){
        console.log("the grade is D");
    }
    else{
        console.log("fail");
    }