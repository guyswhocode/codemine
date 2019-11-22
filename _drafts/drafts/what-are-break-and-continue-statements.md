---
title: What are break and continue statements 
categories: ["programming"] 
tags: ["JS"]
---
     The break statement is used to "jumps out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.
     ```javascript
     for (i = 0; i < 10; i++) {
       if (i === 5) { break; }
       text += "Number: " + i + "<br>";
     }
     ```
     The continue statement is used to "jumps over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
     ```javascript
     for (i = 0; i < 10; i++) {
         if (i === 5) { continue; }
         text += "Number: " + i + "<br>";
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

