---
title: What is a freeze method 
categories: ["programming"] 
tags: ["JS"]
---
     The freeze() method is used to freeze an object. Freezing an object does'nt allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy.
     ```javascript
     const obj = {
       prop: 100
     };

     Object.freeze(obj);
     obj.prop = 200; // Throws an error in strict mode

     console.log(obj.prop); //100
     ```
     **Note:** It causes a TypeError if the argument passed is not an object.

     **[⬆ Back to Top](#table-of-contents)**

