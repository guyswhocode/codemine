---
title: How do you convert date to another timezone in javascript 
categories: ["programming"] 
tags: ["JS"]
---
     You can use toLocaleString() method to convert date in one timezone to another. For example, let's convert current date to British English timezone as below,
     ```javascript
     console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00
     ```

     **[⬆ Back to Top](#table-of-contents)**

