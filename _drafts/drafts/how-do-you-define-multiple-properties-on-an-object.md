---
title: How do you define multiple properties on an object 
categories: ["programming"] 
tags: ["JS"]
---
     The `Object.defineProperties()` method is used to define new or modifies existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,
     ```javascript
     const newObject = {};

     Object.defineProperties(newObject, {
       newProperty1: {
         value: 'John',
         writable: true
       },
       newProperty2: {}
     });
     ```

     **[⬆ Back to Top](#table-of-contents)**

