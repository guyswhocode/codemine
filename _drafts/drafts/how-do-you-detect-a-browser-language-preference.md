---
title: How do you detect a browser language preference 
categories: ["programming"] 
tags: ["JS"]
---
     You can use navigator object to detect a browser language preference as below,
     ```javascript
     var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                    navigator.language ||   // All browsers
                    navigator.userLanguage; // IE <= 10

     console.log(language);
     ```

     **[⬆ Back to Top](#table-of-contents)**

