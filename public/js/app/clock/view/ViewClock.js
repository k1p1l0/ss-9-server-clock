'use strict';

function ViewClock (parameters) {
	init();

	function init () {
		var $button = renderButton(tpl['clock'], {'text': 'Get current time'}, parameters.fn)

		parameters.$main.append($button);

		mediator.addEventListener(renderData);
	}

	function renderButton (tpl, keys, fn) {
		var $button = $('<div></div>');

		$button.html(template(tpl, keys));

		$button.on('click', fn);

		return $button;
	}

	function renderData () {
		parameters.$time.text(parameters.model.get());
	}
}