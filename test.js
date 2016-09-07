import test from 'ava';
import m from './';

const obj = {
	a: 'ape',
	b: 'banana',
	c: 'cat',
	d: 'doorbell'
};

const arr = [
	'ape',
	'banana',
	'cat',
	'doorbell'
];

test('object', t => {
	t.deepEqual(m(obj), {});
	t.deepEqual(m(obj, 'z'), {});
	t.deepEqual(m('obj', 'z'), undefined);
	t.deepEqual(m(obj, 'doorbell'), {d: 'doorbell'});
	t.deepEqual(m(obj, 'a'), {a: 'ape', b: 'banana', c: 'cat'});
});

test('array', t => {
	t.deepEqual(m(arr), {});
	t.deepEqual(m(arr, 'z'), {});
	t.deepEqual(m('arr', 'z'), undefined);
	t.deepEqual(m(arr, 'doorbell'), {3: 'doorbell'});
	t.deepEqual(m(arr, 'a'), {0: 'ape', 1: 'banana', 2: 'cat'});
});
