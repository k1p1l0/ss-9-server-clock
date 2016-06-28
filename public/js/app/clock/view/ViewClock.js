'use strict';

function ViewClock (id) {
	function render (tpl, keys, fn) {
		var button = document.createElement('div');

		button.innerHTML = template(tpl, keys);

		button.addEventListener('click', fn);

		return button;
	}

	this.render = render;
}