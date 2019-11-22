---
title: Give an example where do you really need semicolon 
categories: ["programming"] 
tags: ["JS"]
---
     It is recommended to use semicolons after every statement in JavaScript. For example, in the below case it throws an error ".. is not a function" at runtime due to missing semicolon.
     ```javascript
     // define a function
     var fn = function () {
         //...
     } // semicolon missing at this line

     // then execute some code inside a closure
     (function () {
         //...
     })();
     ```
     and it will be interpreted as
     ```javascript
     var fn = function () {
         //...
     }(function () {
         //...
     })();
     ```
     In this case, we are passing second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a "... is not a function" error at runtime.

     **[⬆ Back to Top](#table-of-contents)**

