---
title: How do you trim a string in javascript 
categories: ["programming"] 
tags: ["JS"]
---
     JavaScript provided a trim method on string types to trim any whitespaces present at the begining or ending of the string.
     ```javascript
     "  Hello World   ".trim(); //Hello World
     ```
     If your browser(<IE9) doesn't support this method then you can use below polyfill.
     ```javascript
     if (!String.prototype.trim) {
         (function() {
             // Make sure we trim BOM and NBSP
             var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
             String.prototype.trim = function() {
                 return this.replace(rtrim, '');
             };
         })();
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

