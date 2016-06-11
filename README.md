Upload file to dropbox. 
========================

install:
------
  ```
npm install dropbox
npm install dropbox-upload -g //for cli
   ```
usage:
------
  use cli command to upload file to dropbox.
  
    node upload-dropbox-cli.js <localFile> <remotePath> <token>
    
      
 ```

 var uploadFile = require('dropbox-upload');
 uploadFile(localFile,remotePath,token,callback);
```
  
Create new app in dropbox and generate  OAuth 2 token, This value is the token. 
  
  
