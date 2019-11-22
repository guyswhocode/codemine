---
title: Is const variable makes the value immutable 
categories: ["programming"] 
tags: ["JS"]
---
     No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)
     ```javascript
     const userList = [];
     userList.push('John'); // Can mutate even though it can't re-assign
     console.log(userList); // ['John']
     ```

     **[⬆ Back to Top](#table-of-contents)**

