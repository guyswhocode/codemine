---
title: How do you parse JSON string 
categories: ["programming"] 
tags: ["JS"]
---
     When receiving the data from a web server, the data is always in a string format. But you can convert this string value to javascript object using parse() method.
     ```javascript
     var userString = '{"name":"John","age":31}';
     var userJSON = JSON.parse(userString);
     console.log(userJSON);// {name: "John", age: 31}
     ```

     **[⬆ Back to Top](#table-of-contents)**

