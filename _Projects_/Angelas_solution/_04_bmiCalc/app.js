
var button = document.getElementsByClassName("bmi_calc")[0];
var result = document.getElementById("result");
result.innerText = "";
var bmi;

button.addEventListener("click", function(){
    var weight = Number(document.getElementById("weight").value);
    console.log(weight);
    var height = Number(document.getElementById("height").value);
    console.log(height);
    bmi = (weight/(height*height));
    result.innerText = bmi;
    console.log(result.innerText);
});
