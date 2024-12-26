//varaibles
//naming convention - firstname, firstName, first_name, FristName, firstName(camel case)

// var keyword - global scope, re-assign
var age = 20;
console.log(age); //20

age = "lakshmi"
console.log(age); //lakshmi

if(true)
{
    var a = 10;
    console.log(a); //10
}
console.log(a); //10

//let keyword - local scope, re-assign
let v2 = 30;
v2 = "vijaya";
console.log(v2);

if(true)
{
    let v3 = 40;
    let v4;
    console.log(v3); // 40
    console.log(v4); //undefined
}

//const keyword - local scope, re-assign not allowed
const v4 = 10;
console.log(v4);

if(true)
{
    const v5 = 100;
    console.log(v5); //100
}

