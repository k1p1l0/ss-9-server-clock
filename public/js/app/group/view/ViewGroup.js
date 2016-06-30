function ViewGroup (parameters) {
	initialize();

	function initialize () {
		parameters.$container.html(createTable());
	}

	function createTable () {
		var	fragments = {},
			table = '';

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
		for (let key in fragments) {
			table += fragments[key].header;
			table += fragments[key].body;
			table += fragments[key].footer;
		}
		table += '</table>';

		return table;			
	}

	function createTableHeader (keys) {
		var convertKeys = {};

		keys.forEach(function (value, key) {
			convertKeys[value] = value;
		});

		return template(tpl['tableHead'], convertKeys);
	}

	function createBody (group) {
		var body = '';

		group.forEach(function (student) {
			body += template(tpl['tableBody'], student);
		});

		return body;
	}

	function createTableFooter (groupLength) {
		return template(tpl['tableFooter'], {
			footName: 'Count',
			footCount: groupLength
		});
	}

	return this;
}