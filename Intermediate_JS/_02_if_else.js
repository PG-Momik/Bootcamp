var a = 1;
var b = 2;
if(a>b){
    console.log("A is greater.");
}
else{
    console.log("B is greater.");
}

var check1 = true;
var check2 = false;
if(check1 == true){
    console.log("Check one is true");
}else{
    console.log("Check one is false");
}
var one_num = 1;
var one_var = '1';
if(one_num == one_var){
   console.log("This doesnt care for variable"); 
}
//three equals
if(one_num === one_var){
    console.log("This doesnt care for variable");
}
else{
    console.log("This cares if variable or not")
}