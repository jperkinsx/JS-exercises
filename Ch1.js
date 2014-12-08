// do while loop
do {
	var name = prompt("Who do you think you are?");
} 
	while (!name);
	console.log(name)


// for loop: even numbers up to 12
for (var number = 0; number <= 12; number += 2);
console.log(number)

// for loop: 2 to the 10th
var result = 1;
for (var counter = 0; counter < 10; counter++)
	result *=2;
console.log(result)

// example of break statement
for (var current = 20; ; current++){
	if (current % 7 == 0)
		break;
}
console.log(current);

// Exercise 1a: looping a triangle (function)
var loopingThroughTriangle = function(){
var hash = "";
for (var counter = 0; counter <8; counter++){
	console.log(hash);
	hash += "#";
}
};
loopingThroughTriangle();

// Exercise 1b: looping a triangle (just loop)
for (var hashLine = "#"; hashLine.length <8; hashLine += "#")
	console.log(hashLine);

// Exercise 2a: FizzBuzz
for (var i = 1; i <= 100; i++)
	if(i % 3 == 0 && i % 5 ==0){
		console.log("FizzBuzz");
	}
	else if (i % 3 == 0 && i % 5 !=0){
		console.log("Fizz");
	}
	else if(i % 5 == 0 && i % 3 !=0){
		console.log("Buzz");
	}
	else
	console.log(i);

// Exercise 2b: FizzBuzz My code works, but here's the author's solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

