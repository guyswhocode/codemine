---
title: How do you make asynchronous HTTP request 
categories: ["programming"] 
tags: ["JS"]
---
     Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing 3rd parameter as true.
     ```javascript
     function httpGetAsync(theUrl, callback)
     {
         var xmlHttpReq = new XMLHttpRequest();
         xmlHttpReq.onreadystatechange = function() {
             if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
                 callback(xmlHttpReq.responseText);
         }
         xmlHttp.open("GET", theUrl, true); // true for asynchronous
         xmlHttp.send(null);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

