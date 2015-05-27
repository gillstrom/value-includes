# value-includes [![Build Status](https://travis-ci.org/gillstrom/value-includes.svg?branch=master)](https://travis-ci.org/gillstrom/value-includes)

> Get values including a string in an object or array


## Install

```
$ npm install --save value-includes
```


## Usage

```js
var valueIncludes = require('value-includes');

var obj = {
	a: 'ape',
	b: 'banana',
	c: 'captain'
}

valueIncludes(obj, 'n');
//=> {b: 'banana', c: 'captain'}

var arr = [
	'ape',
	'banana',
	'cat'
	'banana'
]

valueIncludes(arr, 'n');
//=> {1: 'banana', 3: 'banana'}
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
