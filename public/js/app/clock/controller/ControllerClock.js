function ControllerClock () {
	var id = document.getElementById('main'),
		model = new Clock(),
		view = new ViewClock();

	function getTime () {
		var xhttp = new XMLHttpRequest();

	  	xhttp.onreadystatechange = function() {
	    	if (xhttp.readyState == 4 && xhttp.status == 200) {
	      		document.getElementById('time').innerHTML = xhttp.responseText;
	    	}
	  	};

	  	xhttp.open('GET', '/get-time', true);
	  	xhttp.send();
	}	

	var key = {'text': 'Click Me'},
		button;
	
	button = view.render(tpl['clock'], key, getTime);
	id.appendChild(button);

	return this;
}