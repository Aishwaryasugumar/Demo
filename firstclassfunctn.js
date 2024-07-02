function returnfn(pars){
    return pars**2
}
function addedfn(newfn){
    console.log("the addedval is:",newfn(5))
}
addedfn(returnfn)

//square value

function getsq(parm){
    return parm**2
}
function squareval(sqfn){
    console.log("the square value is",sqfn(2));
}
squarefn(getsq)
