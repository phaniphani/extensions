window.onload = function() {
	var urls = "";
	var anchors = document.getElementsByTagName("a");
	
	var links = document.getElementsByTagName("links");
	if (links && links.length > 0) {
		for (var i = 0; i < links.length; i++) {
			anchors.push(links[i]);
		}
	}

	if (anchors && anchors.length > 0) {
		for (var i = 0; i < anchors.length; i++) {
			if (anchors[i].getAttribute("href")) {
				var newTabAtt = document.createAttribute("onclick");
				newTabAtt.value = "window.open('https://" + document.domain + anchors[i].getAttribute("href") + "')";
				anchors[i].setAttributeNode(newTabAtt);
				anchors[i].setAttribute("href", "#");
				urls += anchors[i];
			}
		}
	}
	
}