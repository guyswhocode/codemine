---
title: What are the string methods available in Regular expression 
categories: ["programming"] 
tags: ["JS"]
---
     Regular Expressions has two string methods: search() and replace().
     The search() method uses an expression to search for a match, and returns the position of the match.
     ```javascript
     var msg = "Hello John";
     var n = msg.search(/John/i); // 6
     ```
     The replace() method is used return a modified string where the pattern is replaced.
     ```javascript
     var msg = "Hello John";
     var n = msg.replace(/John/i, "Buttler"); // Hello Buttler
     ```

     **[⬆ Back to Top](#table-of-contents)**

