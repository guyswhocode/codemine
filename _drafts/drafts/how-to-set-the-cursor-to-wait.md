---
title: How to set the cursor to wait 
categories: ["programming"] 
tags: ["JS"]
---
     The cursor can be set to wait in JavaScript by using the property "cursor". Let's perform this behavior on page load using the below function.
     ```javascript
     function myFunction() {
     window.document.body.style.cursor = "wait";
     }
     ```
     and this function invoked on page load
     ```html
     <body onload="myFunction()">
     ```

     **[⬆ Back to Top](#table-of-contents)**

