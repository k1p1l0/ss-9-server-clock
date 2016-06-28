function Group () {
	var groupList = [];

	groupInit();
	
	function groupInit () {
		var xhttp = new XMLHttpRequest();

		xhttp.addEventListener("load", function() {
  			groupList = JSON.parse(xhttp.responseText);
  			mediator.trigger();
		}, false);

	  	xhttp.open('GET', '/get-list', true);
	  	xhttp.send();
	}

	this.add = function (Student) {
		groupList.push(Student);
	};

	this.getStudentsKeys = function () {
		return Object.keys(new Student('').toJSON());
	};
	
	this.getLength = function () {
		return groupList.length;
	};

	this.forEach = function (fn) {
		groupList.forEach(fn);
	};

	this.toArray = function () {
		return groupList;
	};
	
	return this;
}