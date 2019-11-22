---
title: How do you swap variables in destructuring assignment 
categories: ["programming"] 
tags: ["JS"]
---
     If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using destructuring feature, two variables values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,
     ```javascript
     var x = 10, y = 20;

     [x, y] = [y, x];
     console.log(x); // 20
     console.log(y); // 10
     ```

     **[⬆ Back to Top](#table-of-contents)**

