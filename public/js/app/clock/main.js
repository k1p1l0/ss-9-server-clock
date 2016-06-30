document.addEventListener('DOMContentLoaded', init, false);

var mediator = new Mediator(),
	facade = new Facade(),
	tpl = {};

function init () {
	new ControllerClock();
}