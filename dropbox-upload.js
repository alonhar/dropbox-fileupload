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
	request.post(
		    'https://content.dropboxapi.com/2/files/upload',
			{
				      headers: { Authorization: 'Bearer ' + token,
					  			 "Dropbox-API-Arg": JSON.stringify({"path": remotePath,"mode": "add","autorename": true,"mute": false}),
					        "Content-Type": "application/octet-stream"}, 
                     body: data,
                     json: true
							    
			}, function(err, httpResponse, bodymsg) {

                    callback({
                        err:err,
                        httpResponse:httpResponse,
                        bodymsg:bodymsg
                    });
			}
			  
	);

});
}
module.exports = uploadFile;

