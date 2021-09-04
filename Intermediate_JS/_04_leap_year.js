var btn = document.getElementById("year_btn");
btn.addEventListener("click", function(){
    var year  = document.getElementById("year").value;
    if(year%4 == 0){
        alert("Leap Year.");
    }else{
        alert("Not Leap Year.");
    }
})