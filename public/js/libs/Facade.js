function Facade () {
	return this;
}

Facade.prototype.read = function (url = '', callback = 'undefined') {
	$.get(url, function (data) {
  		callback(data);
  		mediator.trigger();
  	});
}