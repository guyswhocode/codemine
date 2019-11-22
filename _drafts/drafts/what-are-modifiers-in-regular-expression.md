---
title: What are modifiers in regular expression 
categories: ["programming"] 
tags: ["JS"]
---
     Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers,

     | Modifier | Description |
     |---- | ---------
     | i  | Perform case-insensitive matching |
     | g |  Perform a global match rather than stops at first match  |
     | m | Perform multiline matching|

    Let's take an example of global modifier,
    ```javascript
      var text = "Learn JS one by one";
      var pattern = /one/g;
      var result = text.match(pattern); // one,one
    ```


   **[⬆ Back to Top](#table-of-contents)**

