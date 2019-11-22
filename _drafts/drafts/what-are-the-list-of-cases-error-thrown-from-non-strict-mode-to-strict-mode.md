---
title: What are the list of cases error thrown from non-strict mode to strict mode 
categories: ["programming"] 
tags: ["JS"]
---
     When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script
     1. When you use Octal syntax
     ```javascript
     var n = 022;
     ```
     2. Using `with` statement
     3. When you use delete operator on a variable name
     4. Using eval or arguments as variable or function argument name
     5. When you use newly reserved keywords
     6. When you declare a function in a block
     ```javascript
     if (someCondition) { function f() {} }
     ```
     Hence, the errors from above cases helpful to avoid errors in development/production environments.

     **[⬆ Back to Top](#table-of-contents)**

