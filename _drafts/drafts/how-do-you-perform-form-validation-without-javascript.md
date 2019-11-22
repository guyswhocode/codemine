---
title: How do you perform form validation without javascript 
categories: ["programming"] 
tags: ["JS"]
---
     You can perform HTML form validation automatically without using javascript. The validation enabled by applying `required` attribute to prevent form submission when the input is empty.
     ```html
     <form method="post">
       <input type="text" name="uname" required>
       <input type="submit" value="Submit">
     </form>
     ```
     **Note:** Automatic form validation does not work in Internet Explorer 9 or earlier.

     **[⬆ Back to Top](#table-of-contents)**

