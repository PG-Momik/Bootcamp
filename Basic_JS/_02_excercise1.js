var a = document.getElementById("value-a");
var b = document.getElementById("value-b");

var swap = document.getElementById("swap");
swap.addEventListener("click", function(){
    var temp = a.textContent;
    a.textContent = b.textContent;
    b.textContent = temp;
})