---
title: How do you get the prototype of an object 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `Object.getPrototypeOf(obj)` method is used to return the prototype of the specified object. i.e. The value of the internal `prototype` property. If there are no inherited properties then `null` value is returned.
     ```javascript
     const newPrototype = {};
     const newObject = Object.create(newPrototype);

     console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

