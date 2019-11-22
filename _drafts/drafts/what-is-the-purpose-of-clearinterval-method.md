---
title: What is the purpose of clearInterval method 
categories: ["programming"] 
tags: ["JS"]
---
     The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.
     For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by clearInterval() method.
     ```javascript
     <script>
     var msg;
     function greeting() {
        alert('Good morning');
     }
     function start() {
       msg = setInterval(greeting, 3000);

     }

     function stop() {
         clearInterval(msg);
     }
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

