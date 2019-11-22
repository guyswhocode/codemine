---
title: What are default values in destructuring assignment 
categories: ["programming"] 
tags: ["JS"]
---
     A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object usecases,
     **Arrays destructuring:**
     ```javascript
     var x, y, z;

     [x=2, y=4, z=6] = [10];
     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ```
     **Objects destructuring:**
     ```javascript
     var {x=2, y=4, z=6} = {x: 10};

     console.log(x); // 10
     console.log(y); // 4
     console.log(z); // 6
     ```

     **[⬆ Back to Top](#table-of-contents)**

