let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let noAudio = new Audio("noAudio3.mp3");
let yesAudio = new Audio("Happy happy happy2.mp3");
let perfect = new Audio("Ed Sheeran - Perfect.mp3")

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

function yesClick() {
	let imgContainer = document.getElementById("imgDiv");
	let pandaImg = document.getElementById("panda");
	let question = document.getElementsByClassName("quest")[0];
	let para = document.getElementsByClassName("para")[0];
	let btnCont =  document.getElementsByClassName("button--container")[0];

	pandaImg.remove();

	//removing the buttons
	noBtn.remove();
	yesBtn.remove();
	question.remove();

	para.innerText = "Hope to spend some time with you on Valentine's day🥹 \nI love you sweetheart!😚❤️❤️ ";

	let gif = document.createElement("img")
	gif.className = "excited";
	gif.src = "excited.gif";
	btnCont.append(gif);

	let videoTag =  document.createElement("video");
	let videoSrc = document.createElement("source");
	
	// videoSrc attributes
	videoSrc.src = "vday video.mp4";
	videoSrc.type = "video/mp4";

	// videoTag attributes
	videoTag.className = "video";
	videoTag.autoplay = true;
	videoTag.loop = true;

	videoTag.append(videoSrc);
	imgContainer.append(videoTag);

	videoTag.play();

	perfect.volume = 0.4;
	perfect.play();
}

yesBtn.addEventListener("click", yesClick);
