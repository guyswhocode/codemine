---
title: Can you write a random integers function to print integers with in a range 
categories: ["programming"] 
tags: ["JS"]
---
     Yes, you can create a proper random function to return a random number between min and max (both included)
     ```javascript
     function randomInteger(min, max) {
       return Math.floor(Math.random() * (max - min + 1) ) + min;
     }
     randomInteger(1, 100); // returns a random integer from 1 to 100
     randomInteger(1, 1000); // returns a random integer from 1 to 1000
     ```

     **[⬆ Back to Top](#table-of-contents)**

