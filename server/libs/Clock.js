var Clock = (function() {

	function Clock () {
		var date = new Date();

		this.get = function () {
			return date;
		};

		return this;
	}

	Clock.prototype.getHours = function () {
		return this.get().getHours() > 9 ? this.get().getHours() : '0' + this.get().getHours();
	}

	Clock.prototype.getMinutes = function () {
		return this.get().getMinutes() > 9 ? ':' + this.get().getMinutes() : ':0' + this.get().getMinutes();
	}

	Clock.prototype.getSeconds = function () {
		return this.get().getSeconds() > 9 ? ':' + this.get().getSeconds() : ':0' + this.get().getSeconds();
	};

	Clock.prototype.getTime = function () {
		return this.getHours() + this.getMinutes() + this.getSeconds();
	};

	Clock.prototype.normalize = function () {
		return this.getTime();
	};

	return Clock;
})();

module.exports = Clock;