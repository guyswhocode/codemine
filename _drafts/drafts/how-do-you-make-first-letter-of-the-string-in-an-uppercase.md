---
title: How do you make first letter of the string in an uppercase 
categories: ["programming"] 
tags: ["JS"]
---
     You can create a function which uses chain of string methods such as charAt, toUpperCase and slice methods to generate a string with first letter in uppercase.
     ```javascript
     function capitalizeFirstLetter(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

