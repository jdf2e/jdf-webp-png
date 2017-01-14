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
