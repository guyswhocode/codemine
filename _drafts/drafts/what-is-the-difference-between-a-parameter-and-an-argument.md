---
title: What is the difference between a parameter and an argument 
categories: ["programming"] 
tags: ["JS"]
---
     Parameter is the variable name of a function definition whereas an argument represent the value given to a function when it is invoked. Let's explain this with a simple function
     ```javascript
     function myFunction(parameter1, parameter2, parameter3) {
       console.log(arguments[0]) // "argument1"
       console.log(arguments[1]) // "argument2"
       console.log(arguments[2]) // "argument3"
     }
     myFunction("argument1", "argument2", "argument3")
     ```

     **[⬆ Back to Top](#table-of-contents)**

