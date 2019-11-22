---
title: How do you get the current url with javascript 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purpose but this solution has issues in FF.
     ```javascript
     console.log('location.href', window.location.href); // Returns full URL
     ```

     **[⬆ Back to Top](#table-of-contents)**

