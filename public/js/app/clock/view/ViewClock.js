'use strict';

function ViewClock ({$main, $time, model, fn}) {
	init();

	function init () {
		var $button = renderButton(tpl['clock'], {'text': 'Get current time'}, fn)

		$main.append($button);

		mediator.sub('read', renderData);
	}

	function renderButton (tpl, keys, fn) {
		var $button = $('<div></div>');

		$button.html(template(tpl, keys));

		$button.on('click', fn);

		return $button;
	}

	function renderData (value) {
		$time.text(model.get());
	}
}