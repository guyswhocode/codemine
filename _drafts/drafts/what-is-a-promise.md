---
title: What is a promise 
categories: ["programming"] 
tags: ["JS"]
---
    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.
    The syntax of promise would be as below
    ```javascript
    const promise = new Promise(function(resolve, reject) {
      // promise description
    })
    ```

    **[⬆ Back to Top](#table-of-contents)**

