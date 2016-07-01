'use strict';

function Clock () {
	var date = '00:00:00';

	mediator.sub('read', set);

	function get () {
		return date;
	}

	function set (value) {
		date = value;
	}

	this.set = set;
	this.get = get;

	return this;
}

