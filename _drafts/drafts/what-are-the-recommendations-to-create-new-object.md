---
title: What are the recommendations to create new object 
categories: ["programming"] 
tags: ["JS"]
---
     It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.
     1. Assign {} instead of new Object()
     2. Assign "" instead of new String()
     3. Assign 0 instead of new Number()
     4. Assign false instead of new Boolean()
     5. Assign [] instead of new Array()
     6. Assign /()/ instead of new RegExp()
     7. Assign function (){} instead of new Function()

     You can define them as an example,

     ```javascript
     var v1 = {};
     var v2 = "";
     var v3 = 0;
     var v4 = false;
     var v5 = [];
     var v6 = /()/;
     var v7 = function(){};
     ```
     **[⬆ Back to Top](#table-of-contents)**

