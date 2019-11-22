---
title: What are template literals 
categories: ["programming"] 
tags: ["JS"]
---
     Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (` `) character instead of double or single quotes.
     In E6, this feature enables using dynamic expressions as below,
     ```javascript
     var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`
     ```
     In ES5, you need break string like below,
     ```javascript
     var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
     ```
     **Note:** You can use multi-line strings and string interpolation features with template literals.

     **[⬆ Back to Top](#table-of-contents)**

