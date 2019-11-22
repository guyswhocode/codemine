---
title: How do you check whether an object can be extendable or not 
categories: ["programming"] 
tags: ["JS"]
---
     The `Object.isExtensible()` method is used to determine if an object is extensible or not. i.e, Whether it can have new properties added to it or not.
     ```javascript
     const newObject = {};
     console.log(Object.isExtensible(newObject)); //true
     ```
     **Note:** By default, all the objects are extendable. i.e, The new properties can added or modified.

     **[⬆ Back to Top](#table-of-contents)**

