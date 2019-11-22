---
title: How do you get the status of a checkbox 
categories: ["programming"] 
tags: ["JS"]
---
     You can apply `checked` property on selected checkbox in the DOM. If the value is `True` means the checkbox is checked otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below,
     ```html
       <input type="checkbox" name="checkboxname" value="Agree"> Agree the conditions<br>
     ```
     ```javascript
     console.log(document.getElementById(‘checkboxname’).checked); // true or false
     ```

     **[⬆ Back to Top](#table-of-contents)**

