function Student (_name, _birth, _gender, _skype, _mobile, _email) {
	var attributes = {
		name: _name,
	 	birth: _birth,
	 	gender: _gender,
	 	skype: _skype,
	 	mobile: _mobile,
	 	email: _email
	};
	
	this.set = function (name, value) {
		attributes[name] = value;
	};	
		
 	this.get = function (name) {
 		return attributes[name];
 	};

 	this.getAge = function () {
 		return this.get('birth') > 0 ? new Date().getFullYear() - this.get('birth') : '';
 	};

	this.toJSON = function() {
		return {
			name: this.get('name'),
			age: this.getAge(),
			gender: this.get('gender'),
			skype: this.get('skype'),
			mobile: this.get('mobile'),
			email: this.get('email')
		};
	};

	return this;
}