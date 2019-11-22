---
title: How do you copy properties from one object to other 
categories: ["programming"] 
tags: ["JS"]
---
     You can use Object.assign() method which is used to copy the values and properties from one or more source objects to a target object.  It returns the target object which has properties and values copied from the target object. The syntax would be as below,
     ```javascript
     Object.assign(target, ...sources)
     ```
     Let's take exampple with one source and one target object,
     ```javascript
     const target = { a: 1, b: 2 };
     const source = { b: 3, c: 4 };

     const returnedTarget = Object.assign(target, source);

     console.log(target); // { a: 1, b: 3, c: 5 }

     console.log(returnedTarget); // { a: 1, b: 3, c: 5 }
     ```
     As observed in the above code, there is a common property(`b`) from source to target so it's value is been overwritten.

     **[⬆ Back to Top](#table-of-contents)**

