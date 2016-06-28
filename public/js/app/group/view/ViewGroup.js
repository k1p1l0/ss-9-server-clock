function ViewGroup (parameters) {
	initialize();

	mediator.addEventListener(initialize);

	function initialize () {
		parameters.container.innerHTML = createTable();
	}

	function createTable () {
		var	fragments = {},
			table = '',
			key,

		fragments = {
			tableHeader: {
				header: '<thead>',
				body: createTableHeader(parameters.data.getStudentsKeys()),
				footer: '</thead>'
			},
			tableBody: {
				header: '<tbody>',
				body: createBody(parameters.data),
				footer: '</tbody>'
			}
			,
			tableFooter: {
				header: '<tfoot>',
				body: createTableFooter(parameters.data.getLength()),
				footer: '</tfoot>'
			}
		};

		table += '<table class="main-table">';
		for (key in fragments) {
			table += fragments[key].header;
			table += fragments[key].body;
			table += fragments[key].footer;
		}
		table += '</table>';

		return table;			
	}

	function createTableHeader (keys) {
		var tpl = '<tr><th>:name</th><th>:age</th><th>:gender</th><th>:skype</th><th>:mobile</th><th>:email</th></tr>',
			convertKeys = {};

		keys.forEach(function (value, key) {
			convertKeys[value] = value;
		});

		return template(tpl, convertKeys);
	}

	function createBody (group) {
		var tpl = '<tr><td>:name</td><td>:age</td><td>:gender</td><td>:skype</td><td>:mobile</td><td>:email</td></tr>',
			body = '';

		group.forEach(function (student) {
			body += template(tpl, student);
		});

		return body;
	}

	function createTableFooter (groupLength) {
		var tpl = '<tr><td colspan="6">:footName :footCount</td></tr>',
			convertKeys = {};

		convertKeys = {
			footName: 'Count',
			footCount: groupLength
		};

		return template(tpl, convertKeys);
	}

	return this;
}
