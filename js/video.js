var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
});

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + "%";
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if (video.currentTime < (video.duration - 15)) {
		video.currentTime += 15;
		}
	else {
		console.log("Going back to beginning")
		video.currentTime = 0;
		}
	console.log("New location " + video.currentTime);
});

document.getElementById('mute').addEventListener("click", function () {
	if (video.muted == false) {
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
});

document.getElementById("slider").addEventListener("click", function() {
	video.volume = document.getElementById('slider').value / 100;
	console.log("Volume: " + video.volume);
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

