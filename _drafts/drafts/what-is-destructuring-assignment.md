---
title: What is destructuring assignment 
categories: ["programming"] 
tags: ["JS"]
---
     The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
     Let's get the month values from an array using destructuring assignment
     ```javascript
     var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

     console.log(one); // "JAN"
     console.log(two); // "FEB"
     console.log(three); // "MARCH"
     ```
     and you can get user properties of an object using destructuring assignment,
     ```javascript
     var {name, age} = {name: 'John', age: 32};

     console.log(name); // John
     console.log(age); // 32
     ```

     **[⬆ Back to Top](#table-of-contents)**

