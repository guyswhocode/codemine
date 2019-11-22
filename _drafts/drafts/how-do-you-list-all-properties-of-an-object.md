---
title: How do you list all properties of an object 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `Object.getOwnPropertyNames()` method which returns an array of all properties found directly in a given object. Let's the usage of it in an example,
     ```javascript
     const newObject = {
       a: 1,
       b: 2,
       c: 3
     };

     console.log(Object.getOwnPropertyNames(newObject));  ["a", "b", "c"]
     ```

     **[⬆ Back to Top](#table-of-contents)**

