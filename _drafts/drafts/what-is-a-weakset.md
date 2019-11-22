---
title: What is a WeakSet 
categories: ["programming"] 
tags: ["JS"]
---
     WeakSet is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,
     ```javascript
     new WeakSet([iterable]);
     ```
     Let's see the below example to explain it's behavior,
     ```javascript
     var ws = new WeakSet();
     var user = {};
     ws.add(user);
     ws.has(user);    // true
     ws.delete(user); // removes user from the set
     ws.has(user);    // false, user has been removed
     ```

     **[⬆ Back to Top](#table-of-contents)**

