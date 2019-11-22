---
title: How do you convert character to ASCII code 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `String.prototype.charCodeAt()` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,
     ```javascript
     "ABC".charCodeAt(0) // returns 65
     ```
     Whereas `String.fromCharCode()` method to convert numbers to equal ASCII character.
     ```javascript
     String.fromCharCode(65,66,67); // returns 'ABC'
     ```

     **[⬆ Back to Top](#table-of-contents)**

