#!/usr/bin/env node
"use strict";
var token     = process.argv[4];
var localPath  = process.argv[2];
var remotePath = process.argv[3];
var exeFile = process.argv[1].split('/');
var uploadFile = require('./dropbox-upload');
exeFile = exeFile[exeFile.length-1];
if (!token || !localPath || !remotePath){
		console.log("Error: node "+ exeFile + " "+ "<localFile> "+ "<remotePath> "+"<token>" );
			return ;


}
uploadFile(localPath,remotePath,token,function(err){
	if (err){
		console.log(err);
	}else{
		console.log("file uploaded!!");
	}
});
	
