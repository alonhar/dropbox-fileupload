"use strict";

var fs         = require('fs');
var request    = require('request');
var path = require('path');

function uploadFile(localPath,remotePath,token,callback){


var fileToUploadName = localPath.split('/');
fileToUploadName = fileToUploadName[fileToUploadName.length-1];
remotePath = path.normalize("/"+remotePath + "/" +fileToUploadName);
fs.readFile(localPath, function read(err, data) {
	if (err){
		console.log(err);
		return ;
	}
	request.put(
		    'https://api-content.dropbox.com/1/files_put/auto' + remotePath,
			{
				      headers: { Authorization: 'Bearer ' + token  },
					        body: data
							    
			}, function(err, httpResponse, bodymsg) {
				if (err || bodymsg.indexOf("error")>-1) {
					 		 
							callback({err:err,bodymsg:bodymsg});
							      
				}else{
					if (callback){
				
					callback();
					
					}
	
				}				    
			}
			  
	);

});
}
module.exports = uploadFile;

