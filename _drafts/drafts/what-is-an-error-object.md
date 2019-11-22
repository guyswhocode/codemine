---
title: What is an error object 
categories: ["programming"] 
tags: ["JS"]
---
     An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,
     ```javascript
     try {
       greeting("Welcome");
     }
     catch(err) {
       console.log(err.name + "<br>" + err.message);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

