---
title: How do you declare namespace 
categories: ["programming"] 
tags: ["JS"]
---
     Even though JavaScript lack namespaces, we can use Objects , IIFE to create namespaces.
     1. **Using Object Literal Notation:** Let's wrap variables and function inside Object literal which act as a namespace. After that you can access them using object notation
     ```javascript
     var namespaceOne = {
        function func1() {
            console.log("This is a first definition");
        }
     }
     var namespaceTwo = {
          function func1() {
              console.log("This is a second definition");
          }
      }
     namespaceOne.func1(); // This is a first definition
     namespaceTwo.func1(); // This is a second definition
     ```
     2. **Using IIFE (Immediately invoked function expression):** The outer pair of parenthesis of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create same function in two different function expressions to act as namespace.
     ```javascript
     (function() {
      function fun1(){
        console.log("This is a first definition");
        } fun1();
     }());

     (function() {
         function fun1(){
            console.log("This is a second definition");
        } fun1();
      }());
     ```
     3. **Using a block and a let/const declaration:** In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.
     ```javascript
      {
       let myFunction= function fun1(){
       console.log("This is a first definition");
       }
       myFunction();
      }
       //myFunction(): ReferenceError: myFunction is not defined.

      {
       let myFunction= function fun1(){
       console.log("This is a second definition");
       }
       myFunction();
      }
       //myFunction(): ReferenceError: myFunction is not defined.
     ```

     **[⬆ Back to Top](#table-of-contents)**

