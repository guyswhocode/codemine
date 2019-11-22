---
title: What is the advantage of a comma operator 
categories: ["programming"] 
tags: ["JS"]
---
     It is normally used to include multiple expressions in a location that requires a single expression. One of the common usage of this comma operator is to supply multiple parameters in a `for` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,
     ```javascript
     for (var a = 0, b =10; a <= 10; a++, b--)
     ```
     You can also use the comma operator in a return statement where it process before returning.
     ```javascript
     function myFunction() {
        var a = 1;
        return (a += 10, a); // 11
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

