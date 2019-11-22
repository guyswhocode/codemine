---
title: How do get the timezone offset from date 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `getTimezoneOffset` method of date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC
     ```javascript
     var offset = new Date().getTimezoneOffset();
     console.log(offset); // -480
     ```

     **[⬆ Back to Top](#table-of-contents)**

