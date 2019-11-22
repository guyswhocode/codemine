---
title: How do you access history in javascript 
categories: ["programming"] 
tags: ["JS"]
---
    The window.history object contains the browsers history. You can load previous and next URLs in the history using back() and next() methods.
    ```javascript
    function goBack() {
      window.history.back()
    }
    function goForward() {
      window.history.forward()
    }
    ```
    **Note:** You can also access history without window prefix.

    **[⬆ Back to Top](#table-of-contents)**

