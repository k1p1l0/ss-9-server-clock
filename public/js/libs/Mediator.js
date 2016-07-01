'use strict';

var mediator = (function () {
	var channels = {};

	function _subscribe (channel, fn) {
		if (!channels.channel) {
			channels.channel = [];
		}

		channels.channel.push({context: this, callback: fn});
	};

	function _publish (channel, data) {
		if (!channels.channel) {
			return false;
		}

		channels.channel.forEach(subscriber => {
			subscriber.callback.call(subscriber.context, data)
		});
	};

	return {
		subscribe: _subscribe,
		sub: _subscribe,
		publish: _publish,
		pub: _publish
	};
})();