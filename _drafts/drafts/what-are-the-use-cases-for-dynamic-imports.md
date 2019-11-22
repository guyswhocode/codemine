---
title: What are the use cases for dynamic imports 
categories: ["programming"] 
tags: ["JS"]
---
     Below are some of the use cases of using dynamic imports over static imports,
     1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser
     ```javascript
     if (isLegacyBrowser()) {
         import(···)
         .then(···);
     }
     ```
     2. Compute the module specifier at runtime. For example, you can use it for internationalization.
     ```javascript
     import(`messages_${getLocale()}.js`).then(···);
     ```
     3. Import a module from within a regular script instead a module.

     **[⬆ Back to Top](#table-of-contents)**

