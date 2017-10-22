// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

	var prefix2 = cardNumber.slice(0,2);
	var prefix1 = cardNumber.slice(0,1);
	var prefix4 = cardNumber.slice(0,4);
	var prefix3 = cardNumber.slice(0,3);
	var prefix6 = cardNumber.slice(0,6);

	if ((prefix2 === '38' || prefix2 === '39') && cardNumber.length === 14){
		return "Diner's Club";
	}
	else if ((prefix2 === '34' || prefix2 === '37') && cardNumber.length === 15){
		return 'American Express';
	}

	else if ((prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix6 === '564182' || prefix6 === '633110' || prefix4 === '6333' || prefix4 === '6759') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)){
		return 'Switch';
	}

	else if (prefix1 === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
		return 'Visa';
	}

	else if ((prefix2 === '51' || prefix2 === '52' || prefix2 === '53' || prefix2 === '54' || prefix2 === '55') && cardNumber.length === 16){
		return 'MasterCard';
	}

	else if (prefix4 === '6011' || (parseInt(prefix3) >= 644 && parseInt(prefix3) <= 649) || prefix2 === '65' && (cardNumber.length === 16 || cardNumber.length === 19)){
		return 'Discover';
	}
	
	else if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)){
		return 'Maestro';
	}

	else if (((parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) || (parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626) || (parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)){
		return 'China UnionPay';
	}


	

};

console.log(detectNetwork('6759000000000000000'))


