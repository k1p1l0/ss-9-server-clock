function Group () {
	var groupList = [];

	this.set = function (array) {
		groupList = array;
	};

	this.add = function (Student) {
		groupList.push(Student);
	};

	this.getStudentsKeys = function () {
		return Object.keys(new Student('').toJSON());
	};
	
	this.getLength = function () {
		return groupList.length;
	};

	this.forEach = function (fn) {
		groupList.forEach(fn);
	};

	this.toArray = function () {
		return groupList;
	};
	
	return this;
}