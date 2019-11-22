---
title: What is the purpose of Error object 
categories: ["programming"] 
tags: ["JS"]
---
     The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,
     ```javascript
     new Error([message[, fileName[, lineNumber]]])
     ```
     You can throw user defined exceptions or errors using Error object in try...catch block as below,
     ```javascript
     try {
       if(withdraw > balance)
       throw new Error('Oops! You don't have enough balance');
     } catch (e) {
       console.log(e.name + ': ' + e.message);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

