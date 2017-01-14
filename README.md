[![NPM](https://nodei.co/npm/jdf-webp-png.png?downloads=true)](https://nodei.co/npm/jdf-webp-png/)

[![NPM version](https://badge.fury.io/js/jdf-webp-png.png)](http://badge.fury.io/js/jdf-webp-png) [![Build Status](https://travis-ci.org/jdf2e/jdf-webp-png.svg?branch=master)](https://travis-ci.org/jdf2e/jdf-webp-png)


# jdf-webp-png

> A webp-png wrapper for JDF


## Install

```
$ npm install --save jdf-webp-png
```


## Usage

```js
var execFile = require('child_process').execFile;
var cwebp = require('jdf-webp-png');

execFile(cwebp, ['input.png', '-o', 'output.webp'], function (err) {
	if (err) {
		throw err;
	}
	console.log('Image is converted!');
});
```

## CLI

```
$ npm install --global jdf-webp-png
```

```
$ jdf-webp-png --help
```
