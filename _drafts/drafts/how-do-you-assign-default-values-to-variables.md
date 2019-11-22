---
title: How do you assign default values to variables 
categories: ["programming"] 
tags: ["JS"]
---
     You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,
     ```javascript
     var a = b || c;
     ```
     As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

     **[⬆ Back to Top](#table-of-contents)**

