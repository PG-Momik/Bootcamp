var num = Number(prompt("Enter length of series (>2):"));
var n1 = 0,  n2 = 1, next_num;
var output = fibo_generator(num);
// 0, 1, 1, 2, 3

function fibo_generator(n){
    for(var i=0;i<n;i++){
        next_num = n1 + n2
        n1 = n2;
        n2 = next_num;
        console.log(n1);
    }
}