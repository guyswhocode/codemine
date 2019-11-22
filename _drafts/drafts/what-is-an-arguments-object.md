---
title: What is an arguments object 
categories: ["programming"] 
tags: ["JS"]
---
     The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,
     ```javascript
     function sum() {
         var total = 0;
         for (var i = 0, len = arguments.length; i < len; ++i) {
             total += arguments[i];
         }
         return total;
     }

     sum(1, 2, 3) // returns 6
     ```

     **[⬆ Back to Top](#table-of-contents)**

