---
title: How do you loop through or enumerate javascript object 
categories: ["programming"] 
tags: ["JS"]
---
     You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.
     ```javascript
     var object = {
         "k1": "value1",
         "k2": "value2",
         "k3": "value3"
     };

     for (var key in object) {
         if (object.hasOwnProperty(key)) {
             console.log(key + " -> " + object[key]); // k1 -> value1 ...
         }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

