'use strict';
const stringIncludes = require('string-includes');

module.exports = (obj, search) => {
	if (typeof obj !== 'object') {
		return;
	}

	return Object.keys(obj).reduce((all, key) => {
		if (stringIncludes(obj[key], search)) {
			all[key] = obj[key];
		}

		return all;
	}, {});
};
