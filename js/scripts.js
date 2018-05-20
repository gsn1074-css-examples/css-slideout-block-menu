window.addEventListener("load",function() {

	var nodes = document.querySelectorAll('nav > *:first-child');

	for(var i = 0; i < nodes.length; i++) {

		if(nodes[i].hasAttribute("data-toggle") == false) {
			
			nodes[i].setAttribute("data-toggle", "closed");
		}

		nodes[i].addEventListener("click", function(e) {

			if(this.parentNode.getAttribute("data-toggle") == "open") {
			
				this.parentNode.setAttribute("data-toggle", "closed");
			}
			else {
				this.parentNode.setAttribute("data-toggle", "open");
			}
		});
	}
});