'use strict';
var test = require('ava');
var claim = require('claim');
var valueIncludes = require('./');
var obj = {
	a: 'ape',
	b: 'banana',
	c: 'cat',
	d: 'doorbell'
};

var arr = [
	'ape',
	'banana',
	'cat',
	'doorbell'
];

test('object', function (t) {
	claim.same(valueIncludes(obj), {});
	claim.same(valueIncludes(obj, 'z'), {});
	claim.same(valueIncludes('obj', 'z'), undefined);
	claim.same(valueIncludes(obj, 'doorbell'), {d: 'doorbell'});
	claim.same(valueIncludes(obj, 'a'), {a: 'ape', b: 'banana', c: 'cat'});
	t.end();
});

test('array', function (t) {
	claim.same(valueIncludes(arr), {});
	claim.same(valueIncludes(arr, 'z'), {});
	claim.same(valueIncludes('arr', 'z'), undefined);
	claim.same(valueIncludes(arr, 'doorbell'), {3: 'doorbell'});
	claim.same(valueIncludes(arr, 'a'), {0: 'ape', 1: 'banana', 2: 'cat'});
	t.end();
});


