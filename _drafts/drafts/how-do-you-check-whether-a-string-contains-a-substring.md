---
title: How do you check whether a string contains a substring 
categories: ["programming"] 
tags: ["JS"]
---
     There are 3 possible ways to check whether a string contains a substring or not,
     1. **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring
     ```javascript
     var mainString = "hello", subString = "hell";
     mainString.includes(subString)
     ```
     2. **Using indexOf:** In an ES5 or older environments, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exist in the main string.
     ```javascript
     var mainString = "hello", subString = "hell";
     mainString.indexOf(subString) !== -1
     ```
     3. **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions
     ```javascript
     var mainString = "hello", regex = "/hell/";
     regex.test(mainString)
     ```

     **[⬆ Back to Top](#table-of-contents)**

