function template (tpl, data) {
	for(var key in data) {
		tpl = tpl.replace(':' + key, data[key]);
	}

	return tpl;
}