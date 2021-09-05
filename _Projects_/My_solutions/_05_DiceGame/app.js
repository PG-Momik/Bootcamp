var roll_one = document.getElementById("roll_one");
var roll_two = document.getElementById("roll_two");
var images = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];
var p1value = -1;
var p2value = -1;
var winner = document.getElementById("winner");

roll_one.addEventListener("click", function(){
  var value = Math.floor(Math.random()*6+1);
  var img = document.getElementsByClassName("dice-img")[0];
  img.innerHTML = "<img src = './images/"+images[value-1]+"'>";
  p1value = value;
  if(p2value!=-1){
    if(p1value>p2value){
      winner.textContent = "Player 1 wins.";
    }
    else if(p2value>p1value){
      winner.textContent = "Player 2 wins.";
    }else{
      winner.textContent = "Draw";
    }
  }

})

roll_two.addEventListener("click", function(){
  var value = Math.floor(Math.random()*6+1);
  var img = document.getElementsByClassName("dice-img")[1];
  img.innerHTML = "<img src = './images/"+images[value-1]+"'>";
  p2value = value;
  if(p1value!=-1){
    if(p1value>p2value){
      winner.textContent = "Player 1 wins.";
    }
    else if(p2value>p1value){
      winner.textContent = "Player 2 wins.";
    }else{
      winner.textContent = "Draw";
    }
  }
})

