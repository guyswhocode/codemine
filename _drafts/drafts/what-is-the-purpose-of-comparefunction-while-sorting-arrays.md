---
title: What is the purpose of compareFunction while sorting arrays 
categories: ["programming"] 
tags: ["JS"]
---
     The compareFunction is used to define the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value. Let's take an example to see the usage of compareFunction,
     ```javascript
     let numbers = [1, 2, 5, 3, 4];
     numbers.sort((a, b) => b - a);
     console.log(numbers); // [5, 4, 3, 2, 1]
     ```

     **[⬆ Back to Top](#table-of-contents)**

