---
title: What is an Unary operator 
categories: ["programming"] 
tags: ["JS"]
---
     The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.
     ```javascrippt
     var x = "100";
     var y = + x;
     console.log(typeof x, typeof y); // string, number

     var a = "Hello";
     var b = + a;
     console.log(typeof a, typeof b, b); // string, number, NaN
     ```

     **[⬆ Back to Top](#table-of-contents)**

