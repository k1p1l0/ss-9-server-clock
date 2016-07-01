function ControllerClock () {
	var parameters = { 
			$main: $('#main'),
			$time: $('#time'),
			model: new Clock(),
			fn: () => facade.read('getTime')
		};

	new ViewClock(parameters);	
}