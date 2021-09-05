
var button = document.getElementsByClassName("bmi_calc")[0];


button.addEventListener("click", function(){
    var weight = document.getElementById("weight").value;
    var weight_unit = document.getElementById("weight-unit").value;

    var height = document.getElementById("height").value;
    var height_unit = document.getElementById("height-unit").value;
    if(weight_unit == 2){
        weight = Number(weight/1000);
    }
    if(height_unit == 2){
        height = Number(height/100);
    }
    var bmi = (weight/(height*height)).toFixed(2);
    document.getElementsByClassName("result")[0].innerHTML ="BMI = "+bmi+" kg/m<sup>2</sup>";
});
