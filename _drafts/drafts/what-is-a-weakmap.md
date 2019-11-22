---
title: What is a WeakMap 
categories: ["programming"] 
tags: ["JS"]
---
     The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,
     ```javascript
     new WeakMap([iterable])
     ```
     Let's see the below example to explain it's behavior,
     ```javascript
      var ws = new WeakMap();
      var user = {};
      ws.set(user);
      ws.has(user);    // true
      ws.delete(user); // removes user from the map
      ws.has(user);    // false, user has been removed
     ```

     **[⬆ Back to Top](#table-of-contents)**

