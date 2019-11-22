---
title: What is the purpose JSON stringify 
categories: ["programming"] 
tags: ["JS"]
---
     When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.
     ```javascript
     var userJSON = {'name': 'John', age: 31}
     var userString = JSON.stringify(user);
     console.log(userString); //"{"name":"John","age":31}"
     ```

     **[⬆ Back to Top](#table-of-contents)**

