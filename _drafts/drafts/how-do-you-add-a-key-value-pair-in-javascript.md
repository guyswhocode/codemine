---
title: How do you add a key value pair in javascript 
categories: ["programming"] 
tags: ["JS"]
---
     There are two possible solutions to add new properties to an object. Let's take a simple object to explain these solutions.
     ```javascript
     var object = {
         key1: value1,
         key2: value2
     };
     ```
     1. **Using dot notation:** This solution is useful when you know the name of the property
     ```javascript
     object.key3 = "value3";
     ```
     2. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined.
     ```javascript
     obj["key3"] = "value3";
     ```

     **[⬆ Back to Top](#table-of-contents)**

