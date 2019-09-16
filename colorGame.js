var numColors=6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	resetF();
}
function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numColors=3;
			}
			else{
				numColors=6;
			}
			resetF();
		});
	}

}
function setUpSquares(){
	for(var i = 0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor=this.style.background;
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct";
				reset.textContent = "Play Again?";
				h1.style.background = clickedColor;
				changeColors(clickedColor);

			}
			else{
				this.style.background="#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}
function resetF(){
	colors = generateRandomColors(numColors);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	reset.textContent="New Colors";
	h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numColors=3;
// 	colors = generateRandomColors(numColors);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0; i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background="steelblue";
// 	reset.textContent="New Colors";
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numColors=6;
// 	colors = generateRandomColors(numColors);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0; i<squares.length;i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	h1.style.background="steelblue";
// 	reset.textContent="New Colors";
// });


reset.addEventListener("click", function(){
	resetF();
});


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomCols());
	}
	return arr;
}
function randomCols(){
	var r = Math.floor(Math.random() * 256 );
	var g = Math.floor(Math.random() * 256 );
	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r + ", " + g + ", " + b + ")";
}