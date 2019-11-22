---
title: How do you check if a key exists in an object 
categories: ["programming"] 
tags: ["JS"]
---
     You can check whether a key exists in an object or not using two approaches,
     1. ** Using in operator:** You can use the in operator whether a key exists in an object or not
     ```javascript
     "key" in obj
     ```
     and If you want to check if a key doesn't exist, remember to use parenthesis,
     ```javascript
     !("key" in obj)
     ```
     2. ** Using hasOwnProperty method:** You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)
     ```javascript
     obj.hasOwnProperty("key") // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

