'use strict';
var bin = require('./');
bin.run(['--version'], function (err) {
	console.log('cwebp pre-build test passed successfully');
});
