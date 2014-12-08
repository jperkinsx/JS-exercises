// Basic isEven function

function isEven(num){
	if (num % 2 == 0)
		return true
	else return false;
}

// recursive isEven function that allows negative numbers

function isEven(n){
	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else if (n < 0)
		return isEven(-n);
	else return isEven(n-2);
}