# value-includes [![Build Status](https://travis-ci.org/gillstrom/value-includes.svg?branch=master)](https://travis-ci.org/gillstrom/value-includes)

> Get values including a string in an object or array


## Install

```
$ npm install --save value-includes
```


## Usage

```js
const valueIncludes = require('value-includes');

const obj = {
	a: 'ape',
	b: 'banana',
	c: 'captain'
}

valueIncludes(obj, 'n');
//=> {b: 'banana', c: 'captain'}

const arr = [
	'ape',
	'banana',
	'cat',
	'banana'
]

valueIncludes(arr, 'n');
//=> {1: 'banana', 3: 'banana'}
```


## Related

* [value-is](https://github.com/gillstrom/value-is) - Search for values in an object or array


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
