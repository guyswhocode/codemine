---
title: How do you determine whether object is frozen or not 
categories: ["programming"] 
tags: ["JS"]
---
     Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,
     1. If it is not extensible.
     2. If all of its properties are non-configurable.
     3. If all its data properties are non-writable.
     The usage is going to be as follows,
     ```javascript
     const object = {
        property: 'Welcome JS world'
     };
     Object.freeze(object);
     console.log(Object.isFrozen(object));
     ```

     **[⬆ Back to Top](#table-of-contents)**

