'use strict';
var cwebp = require("../");
var fs = require("fs");
var execFile = require('child_process').execFile;
var path = require("path");

execFile(cwebp, ['-version'], function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
});

var testPath = path.join(__dirname, "1_mini.png.webp");
if (fs.existsSync(testPath)) {
    fs.unlinkSync(testPath)
}

execFile(cwebp, [path.join(__dirname, "1.png"), '-o', testPath], error => {
    if (error) {
        throw error;
    }
});
