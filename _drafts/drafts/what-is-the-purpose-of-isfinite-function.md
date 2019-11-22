---
title: What is the purpose of isFinite function 
categories: ["programming"] 
tags: ["JS"]
---
    The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.
    ```javascript
    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(100);         // true
    ```

    **[⬆ Back to Top](#table-of-contents)**

