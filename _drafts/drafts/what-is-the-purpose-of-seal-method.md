---
title: What is the purpose of seal method 
categories: ["programming"] 
tags: ["JS"]
---
     The Object.seal() method is used seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method
     ```javascript
      const object = {
         property: 'Welcome JS world'
      };
      Object.seal(object);
      object.property = 'Welcome to object world';
      console.log(Object.isSealed(object)); // Welcome to object world
      delete object.property; // You cannot delete when sealed
      console.log(object.property); //Welcome to object world
     ```

     **[⬆ Back to Top](#table-of-contents)**

