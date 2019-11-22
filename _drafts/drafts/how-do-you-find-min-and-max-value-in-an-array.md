---
title: How do you find min and max value in an array 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `Math.min` and `Math.max` methods on array variable to find the minimum and maximum elements with in an array. Let's create two functions to find the min and max value with in an array,
     ```javascript
     var marks = [50, 20, 70, 60, 45, 30];
     function findMin(arr) {
       return Math.min.apply(null, arr);
     }
     function findMax(arr) {
       return Math.max.apply(null, arr);
     }

     console.log(findMin(marks));
     console.log(findMax(marks));
     ```

     **[⬆ Back to Top](#table-of-contents)**

