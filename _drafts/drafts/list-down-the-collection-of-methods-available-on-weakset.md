---
title: List down the collection of methods available on WeakSet 
categories: ["programming"] 
tags: ["JS"]
---
     Below are the list of methods available on WeakSet,
     1. add(value): A new object is appended with the given value to the weakset
     2. delete(value): Deletes the value from the WeakSet collection.
     3. has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.
     4. length(): It returns the length of weakSetObject
     Let's see the functionality of all the above methods in an example,
     ```javascript
     var weakSetObject = new WeakSet();
     var firstObject = {};
     var secondObject = {};
     // add(value)
     weakSetObject.add(firstObject);
     weakSetObject.add(secondObject);
     console.log(weakSetObject.has(firstObject)); //true
     console.log(weakSetObject.length()); //2
     weakSetObject.delete(secondObject);
     ```

     **[⬆ Back to Top](#table-of-contents)**

