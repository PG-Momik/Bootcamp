var a = 5;
var b = 10;
var c = 15;
//AND OPERATOR
if(b>5 || c<20){
    console.log("AND operator says all is fine.");
}
else{
    console.log("Not fine.");
}
//AND OR OPERATOR
if(a%5 == 0 && b%5 == 0 && c%5 == 0){
    console.log("All nums divisible by 5.");
}else{
    console.log("All nums not divisible by 5.");
}