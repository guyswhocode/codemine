---
title: How do you return all matching strings against a regular expression 
categories: ["programming"] 
tags: ["JS"]
---
     The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,
     ```javascript
     let regexp = /Hello(\d?))/g;
     let greeting = 'Hello1Hello2Hello3';

     let greetingList = [...greeting.matchAll(regexp)];

     console.log(greetingList[0]); //Hello1
     console.log(greetingList[1]); //Hello2
     console.log(greetingList[2]); //Hello3
     ```

     **[⬆ Back to Top](#table-of-contents)**

