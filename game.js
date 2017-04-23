var defaultBackground = "#232323";
var isHard = true;
var message = document.getElementById("message");
//Get all the squares
var squares = document.querySelectorAll(".square");
var header = document.querySelector("header");
var chosenColor;
//Create array for storing strings in rgb format 
var colors = [];

var numberOfColors;

//Get random colors
colors = newColors();

var btnHard = document.getElementById("btnHard");
btnHard.addEventListener("click", function(){
	this.classList.add("selected");
	btnEasy.classList.remove("selected");
	isHard = true;
	resetGame();
});

var btnEasy = document.getElementById("btnEasy");
btnEasy.addEventListener("click", function(){
	this.classList.add("selected");
	btnHard.classList.remove("selected");
	isHard = false;
	resetGame();
});





//Display chosen color
var colorDisplay = document.getElementById("colorDisplay");
displayChosenColor();
function displayChosenColor(){
	colorDisplay.textContent = chosenColor.toUpperCase();//display as uppdercase

}



var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame, false);

function resetGame(){
	resetButton.textContent = "New Colors";
	header.style.backgroundColor = "rgb(0,153,204)";//reset header background
	//get new colors
	colors = newColors();
	//Clear message
	message.textContent = "";
	//display chosen color
	displayChosenColor();
	//Change color of squares to new colors
	for (var i = 0; i < squares.length; i++) {
 	
 		if(colors[i]){
 			//Color visible square using colors from color array
 			squares[i].style.background = colors[i];
 			//Make square visible
 			squares[i].style.display = "block";
 		}
 		else{
 			//Hide extra squares
 			squares[i].style.display = "none";
 		}
 		
 	}
}


 /**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 
 * Returns a string representing a random rgb color.
 * In the format rgb(255, 255, 255). 
 * Using getRandomInt function to generate random numbers between 0 and 255.
 */
 function getRandomColor(){
	var r = getRandomInt(0, 255);//red
	var g = getRandomInt(0, 255);//green
	var b = getRandomInt(0, 255);//blue
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Resets color array
function newColors(){
	var colorArray = [];
	if(isHard){
		numberOfColors = 6;

	}
	else{
		numberOfColors = 3;
	}
	for (var i = 0; i < numberOfColors; i++) {
	
		colorArray[i] = getRandomColor();
	}
	//Choose new random color as chosen color
	chosenColor = colorArray[getRandomInt(0, numberOfColors-1)];
	return colorArray;

}

//Fill all squares with correct color and change header color
function winState(winColor){
	
	header.style.backgroundColor = winColor;
	resetButton.textContent = "Play Again?";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = winColor;
	}
}


	

	//loop through all the squares
	for (var i = 0; i < squares.length; i++) {
 	
 		//Color each square using colors from color array
 		
 			squares[i].style.background = colors[i];

 			//Create click event listener for squares
 			squares[i].addEventListener("click", function(){
 				//get the color of clicked square
 				var colorClicked = this.style.backgroundColor;
 			
 				//compare color to value of chosen color.
 				if(colorClicked === chosenColor){
 			
 					message.textContent = "Correct"; 
 					if(message.classList.contains("retry")){
 						message.classList.remove("retry");
 					}					
 					message.classList.add("win");
 					winState(colorClicked);
 				}
 				else{
 					message.textContent = "Try again";
 					if(message.classList.contains("win")){
 						message.classList.remove("win");
 					}
 					message.classList.add("retry");
 					
 					this.style.backgroundColor = defaultBackground;
 				}
 			});//End of click EventListener for squares
 		
 		
 		
 	
 	}//Done loooping through squares



