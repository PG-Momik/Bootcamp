let age = Number(prompt("What is your age:"));
life_in_weeks(age);


function life_in_weeks(num){
    total_life  = 90*52;
    spent_life = age*52;
    remaining_life = total_life-spent_life;
    console.log(remaining_life+" weeks in life remaining.");
}