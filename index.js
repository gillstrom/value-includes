'use strict';
var stringIncludes = require('string-includes');

module.exports = function (obj, search) {
	if (typeof obj !== 'object') {
		return;
	}

	var ret = {};

	Object.keys(obj).forEach(function (key) {
		if (stringIncludes(obj[key], search)) {
			ret[key] = obj[key];
		}
	});

	return ret;
};
