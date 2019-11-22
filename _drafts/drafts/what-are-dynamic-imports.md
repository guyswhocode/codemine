---
title: What are dynamic imports 
categories: ["programming"] 
tags: ["JS"]
---
     The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this features is in stage4 proposal(https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.
     The syntax of dynamic imports would be as below,
     ```javascript
     import('./Module').then(Module => Module.method());
     ```

     **[⬆ Back to Top](#table-of-contents)**

