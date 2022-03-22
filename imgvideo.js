const urlWorker = new Worker("urlworker.js");
let video;

urlWorker.onmessage = function(e) {
	const data = e.data;
	if (data[0]) {
		submitVideo(data[1]);
	} else {
		submitImage(data[1]);
	}
}

urlWorker.postMessage(document.location.href)

function windowResized() {
	video.width = window.innerWidth;
	video.height = window.innerHeight;
}

function submitImage(url) {
	document.body.style = "background: url(" + url + ") no-repeat center / contain fixed;"; // ew
}

function submitVideo(url) {
	video = document.createElement("video");
	video.src = url;
	video.width = window.innerWidth;
	video.height = window.innerHeight;
	video.autoplay = true;
	document.body.appendChild(video);
	window.onresize = windowResized;
}