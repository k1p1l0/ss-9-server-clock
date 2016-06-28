'use strict';

function Clock () {
	var date = '00:00:00';

	this.get = function () {
		return date;
	};

	this.set = function (value) {
		date = value;
	};
}

