---
title: How do you write multi-line strings in template literals 
categories: ["programming"] 
tags: ["JS"]
---
     In ES5, you would have to use newline escape character('\n') and concatenation symbol(+) in order to get multi-line strings.
     ```javascript
     console.log('This is string sentence 1\n' +
     'This is string sentence 2');
     ```
     Whereas in ES6, You don't need to mention any newline sequence character,
     ```javascript
     console.log(`This is string sentence
     'This is string sentence 2`);
     ```

     **[⬆ Back to Top](#table-of-contents)**

