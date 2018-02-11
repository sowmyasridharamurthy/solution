//This module reads directories and sub-directories for specific xml file

var dir = require('node-dir');
var fs = require('fs');
var path = require('path');
var ext = '.xml';

function crawl(startdir,filter)
{
	//console.log("we are starting the read");
	var files = fs.readdirSync(startdir);
	for(var i= 0; i<files.length;i++)
	{
		var filename = path.join(startdir,files[i]);
		var stat = fs.lstatSync(filename);
		if(stat.isDirectory()){ 
		//console.log("this is directory:", filename);
		crawl(filename,filter);
		}
		else if(path.extname(files[i]).toLowerCase() === ext) 
			{ 
		        			
			var str = files[i].indexOf("data");
			if(str >= 0){
			console.log('filename', files[i]);}
			
				
		}
	}
	
}

crawl(__dirname, /\*.xml$/)


