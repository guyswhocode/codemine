---
title: What is the way to find the number of parameters expected by a function 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `function.length` syntax to find the number of parameters expected by a function. Let's take an example of `sum` function to calculate the sum of numbers,
     ```javascript
     function sum(num1, num2, num3, num4){
         return num1 + num2 + num3 + num4;
     }
     sum.length // 4 is the number of parameters expected.
     ```

     **[⬆ Back to Top](#table-of-contents)**

