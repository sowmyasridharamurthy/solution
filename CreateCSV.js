//This module creates a new CSV file with header mentioned in JSON format



var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('test.csv');

csv.write([
	["UID","TITLE","ACTOR","DIRECTOR","COUNTRY","FILEPATH","BITRATE","FRAMES_PER_SHIFT","ASPECT_RATIO"]
],{headers:true})
.pipe(ws);
