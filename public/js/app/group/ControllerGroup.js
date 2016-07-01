'use strict';

function ControllerGroup () {
	let parameters = {
			data: new Group(),
			$container: $('#container')
		}

	facade.read('getStudents');

	mediator.subscribe('read', students => {
		parameters.data.set(students);

		new ViewGroup(parameters);
	});
}