---
title: How do you print numbers with commas as thousand separators 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `Number.prototype.toLocaleString()` method which returns a string with a language-sensitive representation such as thousand separator,currency etc of this number.
     ```javascript
     function convertToThousandFormat(x){
       return x.toLocaleString(); // 12,345.679
     }

     console.log(convertToThousandFormat(12345.6789));
     ```

     **[⬆ Back to Top](#table-of-contents)**

