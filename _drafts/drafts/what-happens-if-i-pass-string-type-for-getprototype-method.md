---
title: What happens If I pass string type for getPrototype method 
categories: ["programming"] 
tags: ["JS"]
---
     In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an `Object`.
     ```javascript
     // ES5
     Object.getPrototypeOf('James'); // TypeError: "James" is not an object
     // ES2015
     Object.getPrototypeOf('James'); // String.prototype
     ```

     **[⬆ Back to Top](#table-of-contents)**

