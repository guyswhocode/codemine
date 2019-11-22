---
title: How do you compare two date objects 
categories: ["programming"] 
tags: ["JS"]
---
     You need to use use date.getTime() method to compare date values instead comparision operators (==, !=, ===, and !== operators)
     ```javascript
     var d1 = new Date();
     var d2 = new Date(d1);
     console.log(d1.getTime() === d2.getTime()); //True
     console.log(d1 === d2); // False
     ```

     **[⬆ Back to Top](#table-of-contents)**

