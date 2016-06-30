function ControllerGroup () {
	var parameters = {
			data: new Group(),
			$container: $('#container')
		}

	facade.read('/get-list', parameters.data.set);

	mediator.addEventListener(function() {
		new ViewGroup(parameters);
	});
}