---
title: How do you submit a form using JavaScript 
categories: ["programming"] 
tags: ["JS"]
---
    You can submit a form using JavaScript use document.form[0].submit(). All the form input's information is submitted using onsubmit event handler
    ```javascript
    function submit() {
        document.form[0].submit();
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

