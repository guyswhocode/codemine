---
title: Is javascript supports namespace 
categories: ["programming"] 
tags: ["JS"]
---
     JavaScript doesn’t support namespace by default. So if you create any element(function, method, object, variable) then it becomes global and pollute the global namespace. Let's take an example of defining two functions without any namespace,
     ```javascript
     function func1() {
         console.log("This is a first definition");

     }
     function func1() {
         console.log("This is a second definition");
     }
     func1(); // This is a second definition
     ```
     It always calls the second function definition. In this case, namespace will solve the name collision problem.

     **[⬆ Back to Top](#table-of-contents)**

