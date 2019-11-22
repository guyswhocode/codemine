---
title: How do you test for an empty object 
categories: ["programming"] 
tags: ["JS"]
---
     There are different solutions based on ECMAScript versions
     1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.
     ```javascript
     Object.entries(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well
     ```
     2. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.
     ```javascript
     Object.keys(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well
     ```
     3. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use for-in loop along with hasOwnProperty.
     ```javascript
     function isEmpty(obj) {
       for(var prop in obj) {
         if(obj.hasOwnProperty(prop)) {
           return false;
         }
       }

       return JSON.stringify(obj) === JSON.stringify({});
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

