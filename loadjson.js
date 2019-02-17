// Insert your ajax code here


// End of your ajax code

// Insert your getJSON code here
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function(){
	var ourdata = JSON.parse(ourRequest.responseText);
	console.log(ourdata)
};
ourRequest.send();

// End of your code