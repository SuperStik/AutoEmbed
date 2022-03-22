onmessage = function(e) {
	const url = new URL(e.data)
	postMessage([url.searchParams.has("video"),url.searchParams.get("url")]);
}