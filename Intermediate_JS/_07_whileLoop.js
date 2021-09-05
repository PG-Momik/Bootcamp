var students = ["Ashesh", "Deepa", "Lakpa", "Momik", "Rashila", "Shreeju", "Suza"];
var i = 1;
 while(students.length != 0){
     console.log("Roll No."+ i + " is " + students.shift());
     i++;
 }