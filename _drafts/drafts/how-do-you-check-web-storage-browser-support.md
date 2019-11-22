---
title: How do you check web storage browser support 
categories: ["programming"] 
tags: ["JS"]
---
    You need to check browser support for localStorage and sessionStorage before using web storage,
    ```javascript
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

