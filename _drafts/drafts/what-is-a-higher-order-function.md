---
title: What is a higher order function 
categories: ["programming"] 
tags: ["JS"]
---
Higher-order function is a function that accepts other function as an argument or returns a function as a return value.
```javascript
const firstOrderFunc = () => console.log ('Hello I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
higherOrder (firstOrderFunc);
```

**[⬆ Back to Top](#table-of-contents)**

