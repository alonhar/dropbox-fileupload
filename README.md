Upload file to dropbox. 
========================

install:
------
  ```
npm install dropbox-upload
npm install dropbox-upload -g //for cli
   ```
usage:
------
  use cli command to upload file to dropbox.
  
    dropbox-upload <localFilePath> <remotePath> <token>
    
      
 ```

 var uploadFile = require('dropbox-upload');
 uploadFile(localFilePath,remotePath,token,callback);
```
  
Create new app in dropbox and generate  OAuth 2 token, This value is the token. 
  
  
