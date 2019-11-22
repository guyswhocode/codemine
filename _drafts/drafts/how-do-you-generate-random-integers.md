---
title: How do you generate random integers 
categories: ["programming"] 
tags: ["JS"]
---
     You can use Math.random() with Math.floor() to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,
     ```javascript
     Math.floor(Math.random() * 10) + 1;     // returns a random integer from 1 to 10
     Math.floor(Math.random() * 100) + 1;     // returns a random integer from 1 to 100
     ```
     **Note:** Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

     **[⬆ Back to Top](#table-of-contents)**

