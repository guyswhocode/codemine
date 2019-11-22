---
title: How do you define property on Object constructor 
categories: ["programming"] 
tags: ["JS"]
---
     The Object.defineProperty() static method is used to define a new property directly on an object, or modifies an existing property on an object, and returns the object. Let's see an example to know how to define property,
     ```javascript
     const newObject = {};

     Object.defineProperty(newObject, 'newProperty', {
       value: 100,
       writable: false
     });

     console.log(newObject.newProperty); // 100

     newObject.newProperty = 200; // It throws an error in strict mode due to writable setting

     ```

     **[⬆ Back to Top](#table-of-contents)**

