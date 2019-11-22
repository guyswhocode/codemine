---
title: What is the difference between proto and prototype 
categories: ["programming"] 
tags: ["JS"]
---
     The `__proto__` object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas `prototype` is the object that is used to build `__proto__` when you create an object with new
     ```javascript
     ( new Employee ).__proto__ === Employee.prototype;
     ( new Employee ).prototype === undefined;
     ```

     **[⬆ Back to Top](#table-of-contents)**

