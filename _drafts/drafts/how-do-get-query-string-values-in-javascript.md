---
title: How do get query string values in javascript 
categories: ["programming"] 
tags: ["JS"]
---
     You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,
     ```javascript
     const urlParams = new URLSearchParams(window.location.search);
     const clientCode = urlParams.get('clientCode');
     ```

     **[⬆ Back to Top](#table-of-contents)**

