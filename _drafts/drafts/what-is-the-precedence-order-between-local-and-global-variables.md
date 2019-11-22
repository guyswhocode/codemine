---
title: What is the precedence order between local and global variables 
categories: ["programming"] 
tags: ["JS"]
---
     A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.
     ```javascript
     var msg = "Good morning";
     function greeting() {
        msg = "Good Evening";
        console.log(msg);
     }
     greeting();
     ```

     **[⬆ Back to Top](#table-of-contents)**

