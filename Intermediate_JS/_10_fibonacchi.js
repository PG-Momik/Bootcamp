var num = Number(prompt("Enter length of series (>2):"));
var n1 = 0, n2 = 1, next_num;
var output = fibo_generator(num);

function fibo_generator(n) {
    for (var i = 0; i < n; i++) {
        console.log(n1);
        next_num = n1 + n2
        n1 = n2;
        n2 = next_num;

    }
}