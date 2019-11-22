---
title: When you get a syntax error 
categories: ["programming"] 
tags: ["JS"]
---
     A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error
     ```javascript
     try {
       eval("greeting('welcome)");   // Missing ' will produce an error
     }
     catch(err) {
       console.log(err.name);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

