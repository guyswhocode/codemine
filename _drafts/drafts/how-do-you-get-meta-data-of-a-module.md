---
title: How do you get meta data of a module 
categories: ["programming"] 
tags: ["JS"]
---
     You can use `import.meta` object which is a meta-property exposing context-specific meta data to a JavaScript module. It contains information about the current module, such as module's URL. In browser, you might get different meta data than NodeJS.
     ```javascript
     <script type="module" src="welcome-module.js"></script>
     console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
     ```

     **[⬆ Back to Top](#table-of-contents)**

