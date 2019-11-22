---
title: How do you detect a mobile browser without regexp 
categories: ["programming"] 
tags: ["JS"]
---
     You can detect mobile browser by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,
     ```javascript
     function detectmob() {
      if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
         return true;
       }
      else {
         return false;
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

