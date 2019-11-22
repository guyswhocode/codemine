---
title: What is the main difference between Object.values and Object.entries method 
categories: ["programming"] 
tags: ["JS"]
---
     The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.
     ```javascript
      const object = {
        a: 'Good morning',
        b: 100
      };

      for (let value of Object.values(object)) {
        console.log(`${value}`); // 'Good morning'
                                     100
      }
     ```

     **[⬆ Back to Top](#table-of-contents)**

