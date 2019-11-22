---
title: How do you call the constructor of a parent class 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `super` keyword to call the constructor of a parent class. Remember that `super()` must be called before using 'this' reference. Otherwise it will cause a reference error. Let's the usage of it,
     ```javascript
     class Square extends Rectangle {
       constructor(length) {
         super(length, length);
         this.name = 'Square';
       }

       get area() {
         return this.width * this.height;
       }

       set area(value) {
         this.area = value;
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

