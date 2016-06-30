function ControllerClock () {
	var parameters = { 
			$main: $('#main'),
			$time: $('#time'),
			model: new Clock(),
			fn: function() {
				facade.read('/get-time', parameters.model.set)
			}
		};

	new ViewClock(parameters);	
}