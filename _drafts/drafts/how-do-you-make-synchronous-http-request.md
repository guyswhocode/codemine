---
title: How do you make synchronous HTTP request 
categories: ["programming"] 
tags: ["JS"]
---
     Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript
     ```javascript
     function httpGet(theUrl)
     {
         var xmlHttpReq = new XMLHttpRequest();
         xmlHttpReq.open( "GET", theUrl, false ); // false for synchronous request
         xmlHttpReq.send( null );
         return xmlHttpReq.responseText;
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

