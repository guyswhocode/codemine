---
title: How do you create an object with prototype 
categories: ["programming"] 
tags: ["JS"]
---
     The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.
     ```javascript
      const user = {
        name: 'John',
        printInfo: function () {
          console.log(`My name is ${this.name}.`);
        }
      };

      const admin = Object.create(person);

      admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

      admin.printInfo(); // My name is Nick
     ```

     **[⬆ Back to Top](#table-of-contents)**

