var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ','
	+ (Math.floor(Math.random() * 256)) + ')';
	return color;	
}

function getRandomColor() {
	var ranColor1 = randomColor();
	var ranColor2 = randomColor();
	body.style.background = "linear-gradient(to right, "
	+ ranColor1 + ", "
	+ ranColor2 + ")";
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("load", setGradient());
color2.addEventListener("load", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomColor);