---
title: How do you check web workers browser support 
categories: ["programming"] 
tags: ["JS"]
---
    You need to check browser support for web workers before using it
    ```javascript
    if (typeof(Worker) !== "undefined") {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

