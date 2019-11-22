---
title: How do you find min and max values without Math functions 
categories: ["programming"] 
tags: ["JS"]
---
     You can write functions which loops through an array comparing each value with the lowest value or highest value to find the min and max values. Let's create those functions to find min an max values,
     ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        var length = arr.length
        var min = Infinity;
        while (length--) {
          if (arr[length] < min) {
            min = arr[len];
          }
        }
        return min;
      }

      function findMax(arr) {
        var length = arr.length
        var max = -Infinity;
        while (len--) {
          if (arr[length] > max) {
            max = arr[length];
          }
        }
        return max;
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
     ```

     **[⬆ Back to Top](#table-of-contents)**

