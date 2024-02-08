let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let noAudio = new Audio("noAudio3.mp3");
let yesAudio = new Audio("Happy happy happy2.mp3");

//randomly moving the no button in clicking
function rndmMove() {
	let xAxis = Math.random()*10;
	let yAxis = Math.random()*5;

	noBtn.style.transform = `translate(${xAxis}vw, ${yAxis}vw)`;
}

noBtn.addEventListener("click", rndmMove);

//playing sounds on clicking yes or no button
function playNoSound() {
	noAudio.play();
}

noBtn.addEventListener("click", playNoSound);

function playYesSound() {
	yesAudio.play();
}

yesBtn.addEventListener("click", playYesSound);

yesBtn.addEventListener("click", yesClick);

function yesClick() {
	let imgContainer = document.getElementById("imgDiv");
	let pandaImg = document.getElementById("panda");
	let btnCont =  document.getElementsByClassName("button--container")[0];

	pandaImg.remove();

	let imgElement = document.createElement("img")

	imgElement.className = "img1";
	imgElement.src = "img1.jpg";

	imgContainer.append(imgElement);

	noBtn.remove();
	yesBtn.remove();


	let imgElement2 = document.createElement("img")
	imgElement2.className = "excited";
	imgElement2.src = "excited.gif";
	imgElement2.style.width = "10vw";
	btnCont.append(imgElement2);
}