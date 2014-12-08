//Recursive inventory program that formats studio inventory output to three digits

var studioInventory = function(guitars, amps){
	var guitarString = String(guitars);
	while (guitarString.length < 3)
		guitarString = "0" + guitarString;
	console.log("The studio has " + guitarString + " guitars");

	var ampString = String(amps);
	while (ampString.length < 3)
		ampString = "0" + ampString;
	console.log("The studio has " + ampString + " amps");
}

// Expandable solution for the same problem

function zeroPad(number, width){
	var string = String(number)
	while (string.length < 3)
		string = "0" + string;
	return string;
};

function printStudioInventory(guitars, drums, amps){
	console.log("The studio has " + zeroPad(guitars, 3) + " guitars");
	console.log("The studio has " + zeroPad(drums, 3) + " drums");
	console.log("The studio has " + zeroPad(amps, 3) + " amps");
}