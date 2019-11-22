---
title: How do you get the image width and height using JS 
categories: ["programming"] 
tags: ["JS"]
---
     You can programmatically get the image and check the dimensions(width and height) using Javascript.
     ```javascript
     var img = new Image();
     img.onload = function() {
       console.log(this.width + 'x' + this.height);
     }
     img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
     ```

     **[⬆ Back to Top](#table-of-contents)**

