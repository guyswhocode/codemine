---
title: How do you extend classes 
categories: ["programming"] 
tags: ["JS"]
---
     The `extends` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,
     ```javascript
     class ChildClass extends ParentClass { ... }
     ```
     Let's take an example of Square subclass from Polygon parent class,
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

