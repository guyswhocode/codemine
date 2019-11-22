---
title: How do you compare scalar arrays 
categories: ["programming"] 
tags: ["JS"]
---
     You can use length and every methods of arrays to compare two scalar(compared directly using ===) arrays. The combination of these expressions can give the expected result,
     ```javascript
     const arrayFirst = [1,2,3,4,5];
     const arraySecond = [1,2,3,4,5];
     console.log(arrayFirst.length === arraySecond.length && arrayFirst.every((value, index) => value === arraySecond[index])); // true
     ````
     If you would like to compare arrays irrespective of order then you should sort them before,
     ```javascript
     const arrayFirst = [2,3,1,4,5];
     const arraySecond = [1,2,3,4,5];
     console.log(arrayFirst.length === arraySecond.length && arrayFirst.sort().every((value, index) => value === arraySecond[index])); //true
     ````

     **[⬆ Back to Top](#table-of-contents)**

