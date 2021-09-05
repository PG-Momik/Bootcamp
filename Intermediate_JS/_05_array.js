//Array banaune formal way
var naya_array = new Array(5);
console.log(naya_array);
naya_array[0] = "Momik";
naya_array[1] = "Shrestha";
naya_array[2] = "Kirtipur ";
naya_array[3] = "Kathmandu";
naya_array[4] = "Nepal";
console.log(naya_array);
console.log(naya_array.pop());

var second_array = new Array(5);
second_array = ["Dot Net Tech", "Computer Network", "Computer Graphics", "E-commerce", "Management"];
//0 index remove garxa
console.log(second_array.shift());
console.log(second_array);
second_array.push(".Net Technology");
console.log(second_array);

//0 index ma item naya rakhne
second_array.unshift("project");
console.log(second_array);

//concat array
var arr1 = ["boy1", "boy2"];
var arr2 = ["girl1", "girl2"];
var students = arr1.concat(arr2);
console.log(students);

//sort array
console.log(naya_array.sort());

//reverse array
console.log(naya_array.reverse());

//for each
naya_array.forEach(function(item, index, arr){
    console.log(item);
})
naya_array.forEach(this_function);
function this_function(item, index, arr){
    console.log(arr[index]);
}
