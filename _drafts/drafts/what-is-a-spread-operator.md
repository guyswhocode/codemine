---
title: What is a spread operator 
categories: ["programming"] 
tags: ["JS"]
---
     Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,
     ```javascript
     function calculateSum(x, y, z) {
       return x + y + z;
     }

     const numbers = [1, 2, 3];

     console.log(calculateSum(...numbers)); // 6
     ```

     **[⬆ Back to Top](#table-of-contents)**

